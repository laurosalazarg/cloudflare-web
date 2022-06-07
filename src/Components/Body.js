import React, { Component } from 'react';
import pdf from './Lauro_Salazar-resume-current.pdf'


class About extends Component {
   render() {

      // if (this.state.loading) {      return null; //app is not ready (fake request is in process)    
      // }


      //  if(this.props.data){
      //    var name = this.props.data.name;
      //    var profilepic= "images/"+this.props.data.image;
      //    var bio = this.props.data.bio;
      //    var street = this.props.data.address.street;
      //    var city = this.props.data.address.city;
      //    var state = this.props.data.address.state;
      //    var zip = this.props.data.address.zip;
      //    var phone= this.props.data.phone;
      //    var email = this.props.data.email;
      //    var resumeDownload = this.props.data.resumedownload;
      //  }

      return (






<div class="rn-slider-area">



<div class="container">

   <div class="row row--30 pt--100 pt_sm--50">
      <div class="col-lg-6">
         <div class="d-flex flex-wrap align-content-start h-100">




            <div class="position-sticky sticky-top rbt-sticky-top-adjust-two">

               {/* <!-- end --> */}


               <div class="banner-details-wrapper-sticky slide">


                  <div class="thumbnail">
                     <img src="https://imagedelivery.net/eGT8p8hShyo3UH9oj_BtBw/e1cb1110-d84c-49fd-8069-c84432340e00/public" alt="Personal Portfolio" />





                  </div>


                  <div class="banner-title-area pt--30">
                     <h1 class="title">Hi, I’m <span>Lauro A. Salazar</span><br /><span
                        class="span"> Cloud Systems Engineer.</span></h1>




                     <p class="disc">I'm a Cloud Systems Engineer and Developer based in Austin, TX, with a passion for automation and orchestration. I have 10 years of experience architecting and administrating Highly Available and Critical Infrastructure systems - specializing in F5 Load Balancers, and various Virtualization platforms.</p>
                  </div>



                  <div class="button-group text-center text-md-left pt--60 pt_md--40 pt_sm--40">
                     <a class="rn-btn" href={pdf} ><span>Download My CV</span></a>
                  
                     <a class="rn-btn" href="mailto:lauro.salazar@slzr.cloud"><span>Contact Me</span></a>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div class="col-lg-6">
         <div class="sticky-home-wrapper">

            {/* <!-- about area --> */}
<div class="rn-about-area section-height">
<div class="inner">
<h5 class="title">
   About Me</h5>
<p class="about-disc">


   I'm a technically sophisticated and solutions-oriented leader with significant experience maintaining and troubleshooting applications, virtual environments, and networking infrastructure in mission-critical situations.
</p>
<p class="about-disc">
   I offer hands-on experience with VMware, Hyper-V, and public cloud infrastructure such as AWS, Azure, and GCP. <br/>I dable a little in storage systems such as Nimble and NetApp. <br/><br/>Lately, I spend most of my time in F5 load balancers, learning about securing systems, deploying kubernetes clusters, and spearheading infrastructure automation efforts.
   </p>
   </div>
   </div>
                     {/* <!-- about area end --> */}



         
                     {/* <!-- Start skill  area --> */}
<div class="rn-skill-area section-height">
   <div class="inner slide">
      <h5 class="title">
            Tech Stack
      </h5>
      <div class="skill-share-inner pt--100">
            <span class="title">Virtualization</span>
            <ul class="skill-share d-flex liststyle">
               <li><img src="/images/icons/vmware.png"  alt="Icons Images"/></li>
               <li><img src="/images/icons/f5.png" alt="Icons Images"/></li>
                  <li><img src="/images/icons/azure.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/aws.png" alt="Icons Images"/></li>
            
               <li><img src="/images/icons/gcp.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/microsoft.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/linux.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/veeam.png" alt="Icons Images"/></li>
               
               <li><img src="/images/icons/hv.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/nimble.jpg" alt="Icons Images"/></li>
               <li><img src="/images/icons/netapp.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/ansible.png" alt="Icons Images"/></li>
                     <li><img src="/images/icons/tf.png" alt="Icons Images"/></li>

                  <li><img src="/images/icons/powershell.png" alt="Icons Images"/></li>
                  
                              <li><img src="/images/icons/ad.png" alt="Icons Images"/></li>

                                 <li>TCP/IP</li>
                                 <li>DNS</li>
                                 <li>VPC</li>
                                 <li>WAF</li>
                                 <li>DHCP</li>

                                 
            </ul>
      </div>
      <div class="skill-share-inner skill-share-inner-width margin-top-25">
            <span class="title">Programming Languages</span>
            <ul class="skill-share d-flex liststyle">
               <li><img src="/images/icons/py.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/dotnet.jpg" alt="Icons Images"/></li>
               <li><img src="/images/icons/csharp.png" alt="Icons Images"/></li>
               <li><img src="/images/icons/sql.png" alt="Icons Images"/></li>
         
               
               <li><img src="/images/icons/icons-18.png" alt="Icons Images"/></li>

               <li><img src="/images/icons/css3.png" alt="Icons Images"/></li>
               
            </ul>
      </div>
   </div>
</div>
                            {/* <!-- End skill area --> */}


         {/* <!-- social sharea area --> */}
         <div class="social-share-style-1  d-flex    title">

            <ul class="social-share d-flex liststyle">

               <li class="instagram"><a href="https://www.instagram.com/heyarnoldls/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
               </svg></a>
               </li>


               <li class="linkedin"><a href="https://www.linkedin.com/in/lauro-salazar/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                  </path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
               </svg></a>
               </li>
            </ul>
         </div>
      </div>






   </div>
</div>
</div>
</div>



      );
   }
}

export default About;
