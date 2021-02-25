import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './ContactStyle.css'
import samer from '../../img/samer.png'
import abd from '../../img/abd.png'
import amin from '../../img/amin.png'
import bara from '../../img/bara.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#0f1216',
        color: '#b7b7b7',
        // display: 'flex',
        // flexWrap: 'wrap',
        // '& > *': {
        //     margin: theme.spacing(1),
        //     width: theme.spacing(16),
        //     height: theme.spacing(16),
        // },
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <div>
            <div className="content">
                <h1 className="section-header">Get in  <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s">  Touch with us</span></h1>
                <br />
                <div className="about">
                <h2>What is e-Book?</h2>
                <p>It is an online office website for specific source books that are trusted by direct materials for any of the materials that we provide to you, and their source and quality can be checked as you like. But we have collected it to be easier for those who want to search quickly and the place that we are sure after several studies we conducted on browsers of these books, so that the percentage of beneficiaries was higher and faster in terms of searching time in several sites and the speed of utilization of books available in the covered specialties.</p>
                <h2>Why do we use it?</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using e-Book is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use e_Book as their default model text, and a search for 'e_Book' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
                <h2>Where can I get some?</h2>
                <p>There are many variations of passages of e_Book available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of e-book, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the e_Book generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate e_Book which looks reasonable. The generated e_Book is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div>
                            <div className="box">
                                <div className="img">
                                    <Paper className={classes.root} elevation={3}>
                                        <div className="container portfolio">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="heading">
                                                        <div className="bio-info">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="bio-image">
                                                                                <img className="avatar" src={abd} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h3>  Abed Qamheyeh<br /><span><br />  Full Stack Web Developer</span></h3>
                                                            <p><h4>  Specialist: java / Python </h4></p>
                                                            <div className="links">
                                                                <a href="#"><FacebookIcon /></a>
                                                                <a href="#"><TwitterIcon /></a>
                                                                <a href="#"><LinkedInIcon /></a>
                                                                <a href="https://github.com/abdqam"><GitHubIcon /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div className="box">
                                <div className="img">
                                    <Paper className={classes.root} elevation={3}>
                                        <div className="container portfolio">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="heading">
                                                        <div className="bio-info">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="bio-image">
                                                                                <img className="avatar" src={samer} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h3>Samer Qawasmeh<br /><span><br />Full Stack Web Developer</span></h3>
                                                            <p><h4> Specialist: Frontend / Python </h4></p>
                                                            <div className="links">
                                                                <a href="#"><FacebookIcon /></a>
                                                                <a href="#"><TwitterIcon /></a>
                                                                <a href="#"><LinkedInIcon /></a>
                                                                <a href="https://github.com/sameryqawasmeh"><GitHubIcon /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <div className="box">
                                <div className="img">
                                    <Paper className={classes.root} elevation={3}>
                                        <div className="container portfolio">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="heading">
                                                        <div className="bio-info">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="bio-image">
                                                                                <img className="avatar" src={amin} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h3>Amin Eid<br /><span><br />Full Stack Web Developer</span></h3>
                                                            <p><h4> Specialist: java  </h4></p>
                                                            <div className="links">
                                                                <a href="#"><FacebookIcon /></a>
                                                                <a href="#"><TwitterIcon /></a>
                                                                <a href="#"><LinkedInIcon /></a>
                                                                <a href="https://github.com/amin-eid/"><GitHubIcon /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div >
                            <div className="box">
                                <div className="img">
                                    <Paper className={classes.root} elevation={3}>
                                        <div className="container portfolio">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="heading">
                                                        <div className="bio-info">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="row">
                                                                        <div className="col-md-12">
                                                                            <div className="bio-image">
                                                                                <img className="avatar" src={bara} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <h3>Bara'a Aqel<br /><span><br />Full Stack Web Developer</span></h3>
                                                            <p><h4> Specialist:mern Stack </h4></p>
                                                            <div className="links">
                                                                <a href="#"><FacebookIcon /></a>
                                                                <a href="#"><TwitterIcon /></a>
                                                                <a href="#"><LinkedInIcon /></a>
                                                                <a href="https://github.com/baraaqel"><GitHubIcon /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Paper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactUs
