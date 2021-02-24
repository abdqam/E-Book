const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minlength: [3, 'First name should be at least 3 characters'],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            minlength: [3, 'Last name should be at least 3 characters'],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            validate: {
                validator: (val) => /^([\w-.]+@([\w-]+.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email",
            },
        },
        role: {
            type:Number,
            default:0
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be 8 characters or longer"],
        },


    }, { timestamps: true }
);
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});
module.exports.User = mongoose.model('User', UserSchema);


const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [3, 'First name should be at least 3 characters'],
        },
        users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    }, { timestamps: true }
)
module.exports.Role = mongoose.model('Role', RoleSchema);