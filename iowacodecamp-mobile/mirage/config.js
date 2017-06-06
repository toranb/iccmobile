export default function() {
  this.timing = 1;
  this.logging = false;
  this.get('/api/sessions', function() {
    return {
      "d": {
        "success": true,
        "message": null,
        "data": [{
          "session": "Continuous Security",
          "time": "9:00 AM - 10:15 AM",
          "desc": "Security breaches are becoming more and more commonplace in today's world. One time security reviews just prior to release and static code analysis don't catch all critical vulnerabilities. Capturing them on a continuous basis as code is written is a better approach. I will focus on incorporating tools to automate enforcing security concerns into Agile software processes.\r\n\r\nWorldwide, from government to retail, banking to healthcare, hacks and data breaches are becoming household names. Yet software teams often ignore many security concerns as they work towards their various delivery deadlines, handling only those that are easy to incorporate. And teams generally rely on manual processes to ensure that even these steps are followed.\r\n\r\nToday, Agile is more than a buzzword; it?s the new norm. Its adoption is widespread and there are conferences and books dedicated to the practice. It?s known for bringing testing into focus as something that should be done throughout the delivery process instead of just at the end.\r\n\r\nTaking the same approach for security is a logical next step in advancing our craft. By including various security checks in our Continuous Delivery practices we can ensure that we are thinking about building secure applications from the start rather than waiting until the end, doing some ad hoc testing, and praying that we are not the headline of the next large breach.\r\n\r\nThis talk will go through a few options, using examples for multiple programming languages including C#, Java, and Ruby and highlighting how running them regular could thwart various security threats.",
          "room": "Prairie.Code() - Room 1",
          "speaker": {
            "web": "http://jemappellewendyi.com",
            "location": "Chicago, IL",
            "name": "Wendy Istvanick",
            "bio": "Wendy has been a developer with ThoughtWorks for over 20 years and has enjoyed solving technical problems and making people happy along the way. She also loves to travel. So life as a consultant has been great, giving her many chances to enable solutions while living in places she never would have dreamed of living while growing up, including Brazil, France, India, and Zambia.\r\n\r\nIn addition to coding on many projects she has had the opportunity to facilitate training both internal to ThoughtWorks and at client sites over the years thus being able to share her craft with others. Most recently this includes delivering application security training to consultants around the globe, including trainer other trainers to deliver the same material.",
            "img": "xyz.jpg"
          }
        }, {
          "session": "From Legacy MVC to Modern MVC: An ASP.NET Core Migration Path",
          "time": "9:00 AM - 10:15 AM",
          "desc": "With all the buzz around Microsoft's revitalized ASP.NET MVC Core framework, you may wonder what has changed since your \"legacy\" ASP.NET MVC application was written. Sure, there are new framework features and development tools available; but, which of these things are actually worth adopting and when? Should I stick with ASP.NET Web Optimization for bundling &amp; minification, or should I use Gulp? What's the difference between a tag helper and an HTML helper? Which package manager(s) should I use to acquire the requisite bits and assets? How does the framework support dependency injection for my controllers? Should I target .NET Framework, .NET Core, or both? Lend me 60 minutes of your time, and I'll answer these and some other frequently asked questions. You'll leave with a clearer picture of a practical migration path for your aging MVC application.",
          "room": "Room 2",
          "speaker": {
            "web": "https://scottaddie.com/",
            "location": "Madison, WI",
            "name": "Scott Addie",
            "bio": "Scott Addie is a Microsoft Certified Solutions Developer (Web Applications), a Microsoft MVP (Visual Studio and Development Technologies), and a .NET Solutions Architect with CUNA Mutual Group in Madison, WI. He has over a decade of experience in full-stack enterprise application development using Microsoft web technologies and JavaScript. In his spare time, Scott can be found spending time with his wife and 3 kids, attending user groups, code camps, &amp; conferences, and blogging about ASP.NET and JavaScript at scottaddie.com.",
            "img": null
          }
        }, {
          "session": "Working with Azure WebJobs",
          "time": "9:00 AM - 10:15 AM",
          "desc": "The presentation explores some basics about Azure WebJobs; what they are, how they can be used, how to create and deploy them. It then covers some examples of WebJobs (with code) inspired by actual use cases, including integration with the Azure Service Bus and other Azure resources, for an application written and maintained by the presenter. Finally, it covers some lessons learned from the experience. The intent is to have an interactive session. Questions are encouraged.",
          "room": "Room 3",
          "speaker": {
            "web": "https://farm-fresh-code.blogspot.com",
            "location": "Iowa City, IA",
            "name": "Tim VanFosson",
            "bio": "Tim works at the Nerdery as a Principal Software Engineer, mostly writing web applications and APIs using C#/.NET. Before that he worked at The University of Iowa for nearly 30 years as a system administrator, manager, and programmer. Tim has a BS and MCS in computer science from Iowa and loves writing code and poetry.",
            "img": null
          }
        }, {
          "session": "Crafting Innovation",
          "time": "9:00 AM - 10:15 AM",
          "desc": "In this session, we will examine the notion of 'innovation' with the goal of enabling new ideas within your team.  This starts by challenging the concept of what innovation means and where new ideas originate.  \r\n\r\nTechniques will be offered for building a culture of innovation which include: how to curate ideas, inspire teams, build innovative mindsets, create better processes and deal with change.  By the end of the session, attendees will gain new strategies that foster an environment of empowerment, creativity and collaboration.",
          "room": "Room 4",
          "speaker": {
            "web": "http://www.wirestream.com",
            "location": "Kansas City, MO",
            "name": "Steve Green",
            "bio": "Over the last decade, Steve has focused on exploring digital craftsmanship and innovative disruption. He has spent time with organizations of various sizes, in numerous industries, maximizing business value by employing the artistry of technology. Throughout his career, Steve has accepted a variety of leadership roles, each focused on multiple aspects of application architecture and digital transformation. This experience has provided him with a unique perspective on the challenges and opportunities of constant innovation.\r\n\r\nCurrently, Steve serves as the Chief Digital Officer and a Managing Member of Wirestream, an interactive consultancy headquartered in Kansas City. With its roots in business analysis and marketing technologies, Wirestream has a passion for helping clients fill gaps within complex digital ecosystems. Steve leads team members across a multitude of disciplines including software architecture, data science, business intelligence, interactive engineering, development operations, creative design, application development, and quality control practices. Whether engaged for their specialized talents or combined to meet complex project needs, his team excels at delivering exceptional service around evolving digital landscapes.",
            "img": null
          }
        }, {
          "session": "Successful Patterns for Application Automation",
          "time": "9:00 AM - 10:15 AM",
          "desc": "Business and customer value is derived from running applications. ?Fully automating the provisioning, deployment, and management of applications is a complex task. ?Managing infrastructure with code is necessary but doing so often leaves a lot to be desired in terms of deploying and managing complex applications. ?This talk will review some of the lessons learned from automating infrastructure and highlight the successful patterns for application automation. ?You will learn how to simplify your applications and infrastructure, accelerate your delivery, and how to empower and enable teams to delight customers.",
          "room": "Room 5",
          "speaker": {
            "web": "http://nlsmith.com",
            "location": "South Amana, Iowa",
            "name": "Nathan L Smith",
            "bio": "Nathan Smith is an engineer at Chef Software who builds stuff to help people build stuff. He lives in South Amana, Iowa with his family.",
            "img": null
          }
        }, {
          "session": "UX-driven Development at Pear Deck",
          "time": "9:00 AM - 10:15 AM",
          "desc": "UX-driven development at Pear Deck is like test-driven or domain-driven development, except we start from the UX. We build the UX first and get it right first, and then implement the actual functionality only after we have it right.\r\n\r\nWe?re going to talk about a part of UX-driven development at the technical level, when it?s time to actually make a user interface look and feel exactly like you want. We spend most of our day iterating on code, so the biggest pains are always things that are tedious to reproduce over and over again - complex setups, gnarly 3rd-party APIs, etc.\r\n\r\nThis is a repeat (with updates!) of the talk we gave at Film Scene last October.",
          "room": "Room 6",
          "speaker": {
            "web": "http://peardeck.com",
            "location": "Iowa City",
            "name": "Riley Eynon-Lynch",
            "bio": "Riley is the CEO of Pear Deck, his second software company. The first was acquired in 2013. He is a programmer, teacher, and bearer of general existential angst.",
            "img": null
          }
        }, {
          "session": "Practical Cryptography for the Everyday Dev",
          "time": "10:30 AM - 11:45 AM",
          "desc": "RSA, SSL, TLS, MitM, 3DES, AES, PFX, Hash, Salt, MAC, HMAC, JWT... You've gotten by as a developer by following blog posts and doing your best to understand, but what the hell does it all actually mean?\r\n\r\nIn this session we will not be going deep into the theory of cryptography but we'll walk through all the important concepts to keep you, your data and your customers secure. We'll find out what you want to use, when you want to use it and what not to do. Along the way, we'll invite our friends Alice and Bob and perhaps we'll find out why Charlie is such a prick.",
          "room": "Prairie.Code() - Room 1",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "West Des Moines",
            "name": "Jon von Gillern",
            "bio": "Jon is a Consultant from West Des Moines, Iowa. After his wife and kids, his love and passion lies with Regular Expressions, C#, Data Visualization and Azure.",
            "img": null
          }
        }, {
          "session": "Adding ES6 to Your Developer Toolbox",
          "time": "10:30 AM - 11:45 AM",
          "desc": "Web developers constantly look for the latest and greatest ways to hone their craft, but changes come fast. From jQuery to Angular to Ember to React, CoffeeScript to TypeScript, it seems there is always something new. But ES6 is something different. With ES6 we are seeing the evolution of core JavaScript. It includes syntactic improvements and great new features never before seen in client-side code. Linters and compilers for ES6 are readily available and easy to use. There is no need to wait; learn how to leverage the power of \"the new JavaScript\" in your applications today!",
          "room": "Room 2",
          "speaker": {
            "web": "http://www.aranasoft.com",
            "location": "St. Louis MO",
            "name": "Jeff Strauss",
            "bio": "Jeff is both a software consultant and a licensed attorney. Because of his unique experiences that combine technology and law, he is equally comfortable presenting to a room full of geeks or donning a suit to meet with corporate executives. He maintains a passion for solving problems with inspired solutions, improving life through technology. \r\n\r\nA dedicated member of the developer community, Jeff regularly travels to speak on both technical and business-oriented topics across the country. He is co-owner of Arana Software and enjoys the honor of serving on the board of directors for DevUp Conference (formerly St. Louis Days of .NET) and the St. Louis .NET User Group.",
            "img": null
          }
        }, {
          "session": "Chrome App and Extension crash course",
          "time": "10:30 AM - 11:45 AM",
          "desc": "Browser Apps/Extensions can be super helpful for day to day use. Making a Chrome App or Extension actually isn't as hard as it might seem. However, there are some differences between a Chrome App and Extension that might make a difference between which one you go with. I?ll go over creating a basic one, some of the standard API items, and some of the tips/tricks I learned while making one of each. Hopefully by the end of this you could go home and create your own App/Extension.",
          "room": "Room 3",
          "speaker": {
            "web": "http://chuckrolek.com",
            "location": "Des Moines",
            "name": "Chuck Rolek",
            "bio": "Fueled by silliness and coffee I try to create efficiency in everything I and others do. I absolutely love technology, and I spend a vast majority of my time learning about it or teaching it to others. Recently I?ve made the jump to the consulting world and traded in my Front-end dev skills for the  DevOps/Nodejs stack.",
            "img": null
          }
        }, {
          "session": "Develop Empathy, Develop Accessible User Experiences",
          "time": "10:30 AM - 11:45 AM",
          "desc": "Millions of Americans are faced with permanent, temporary, or circumstantial disabilities that affect how they use the internet and your chances of acquiring one of these disabilities goes up with age. Most websites do not lawfully comply with the Web Content Accessibility Guidelines or the 21st Century Communications and Video Accessibility Act. This makes it difficult, if not impossible, for people who depend on assistive technology to access websites for business, education, entertainment, and to stay in touch with the rest of the world.\r\n\r\nDevelop empathy with your site visitors by participating in interactive simulations of what it feels like to have a variety of disabilities. Experience how assistive technology helps people overcome obstacles on the web. Learn what you can do to empower everyone to use your website effortlessly and avoid a costly lawsuit.",
          "room": "Room 4",
          "speaker": {
            "web": "http://geovoices.geonetric.com/author/askeries/",
            "location": "Cedar Rapids, IA",
            "name": "Andrea Skeries",
            "bio": "Andrea has spent over a decade using her artistic vision and technical know-how to design and develop professional websites with a strong background in healthcare and accessibility. A member of the International Association of Accessibility Professionals (IAAP) and the organizer of the Iowa Web Accessibility, UX, and Inclusive Design meetup group, she?s dedicated to ensuring everyone has equal access to content and functionality on the web.",
            "img": null
          }
        }, {
          "session": "Developing on a SaaS-ish Dynamics AX Platform",
          "time": "10:30 AM - 11:45 AM",
          "desc": "In this session, we'll ramp up our introductory X++ crash course and start thinking about models, extensions, and packages.",
          "room": "Room 5",
          "speaker": {
            "web": "http://axdeveloperconnection.it/webapp/blog",
            "location": "Coralville, IA",
            "name": "Lane Swenka",
            "bio": "Lane has provided technical and functional consultation, application development, and integration services for Microsoft Dynamics AX since 2011.  \r\n\r\nAt present, Lane is a Technical Solutions Engineer for mcaConnect, and 2-time Microsoft Business Solutions MVP (formerly known as Dynamics AX MVP).  He has a passion for innovation, has facilitated implementations across the world, and directly influenced the development of AX7.",
            "img": null
          }
        }, {
          "session": "Building your First IoT Project",
          "time": "10:30 AM - 11:45 AM",
          "desc": "So you've written hello world (blinked an LED) a hundred times with your Raspberry Pi or other IoT device, you've read books and endless blog posts, been super excited about projects you've seen on Instructables or Hackster.io, but still don't have the confidence to jump in and make your first REAL IoT project.  In this session, we'll go over some ideas for good starter projects, and build one from start to finish!",
          "room": "Room 6",
          "speaker": {
            "web": "http://adambarney.com",
            "location": "Lincoln, NE",
            "name": "Adam Barney",
            "bio": "Monday, September 21, 2015\r\n3:27 PM\r\n\r\nAdam is a nerd. That kept me humble and nearly friendless (*sniff*) through school, but I wear it as a badge of honor now. After buying a Commodore 64 with money from his paper route in the 4th grade, he?s never stopped learning about computers and how to make these stupid machines do cool things. I am a Microsoft C# MVP and ASP Insider, running my independent consulting company from my home in Lincoln, NE. In my spare time, I run a user group and a couple developer conferences, and generally take on way more work than I have time for. I can also be found speaking at many mid-west user groups, code camps and developer conferences.",
            "img": null
          }
        }, {
          "session": "All Teams Are Distributed",
          "time": "12:45 PM - 2:00 PM",
          "desc": "We hear it all the time: face-to-face communication is best. Co-located teams are more collaborative, more productive, more manageable. Pair programming is more efficient than code review. Mob programming?literally the whole team around one screen?may be even more efficient. This session won't try to argue that these statements aren't true in the moment, but rather that these optimizations achieve a local maximum. We will explore the limitations of co-location, and discuss distributed communication patterns that can help even mostly co-located teams achieve their global maximum.",
          "room": "Prairie.Code() - Room 1",
          "speaker": {
            "web": "https://lostechies.com/keithdahlby/",
            "location": "Cedar Rapids, IA",
            "name": "Keith Dahlby",
            "bio": "Keith Dahlby is a father, web developer, Git enthusiast, language geek and seven-time C# MVP from Cedar Rapids, Iowa. By day he's CTO of HuBoard and Architect for the New Bohemian Innovation Collaborative; by night he once blogged with Los Techies, but now just argues on Twitter. His open source efforts include posh-git, a Git environment for PowerShell; and up-for-grabs.net, a site featuring open source projects looking to mentor new contributors. He's also a core contributor to LibGit2Sharp, used by GitHub for Windows and Git for Visual Studio. Keith studied Computer Engineering and Human-Computer Interaction at Iowa State University, and has spoken at developer events around the world. His talks have been described as \"terrific!\", \"very interactive!\", and \"the best I've seen all hour!\".",
            "img": null
          }
        }, {
          "session": "Introduction into ASP.NET Core",
          "time": "12:45 PM - 2:00 PM",
          "desc": "In this session, I'll give an introduction to ASP.NET Core, the new web framework just released by Microsoft.  We'll go over the reasons for the rewrite, some of the overarching themes of the new stack, talk about some of the biggest changes, and then we'll dive into some code to show off some of the new features.",
          "room": "Room 2",
          "speaker": {
            "web": "http://scottsauber.com",
            "location": "Ankeny, Iowa",
            "name": "Scott Sauber",
            "bio": "I'm a technology enthusiast, mainly focused on web development and DevOps.  I primarily work with C#, JavaScript, HTML, CSS, and PowerShell.",
            "img": null
          }
        }, {
          "session": "Advanced Basics: SOLID Principles",
          "time": "12:45 PM - 2:00 PM",
          "desc": "Do you write SOLID code? Did you realize that SOLID isn't upper-cased for emphasis - it's an acronym?  Don't worry, you're not alone.  The SOLID principles of object-oriented software design are a set of software design principles that can help you write more stable, maintainable (yes, even \"solid\") code every time you sit down at your computer.  These are \"Advanced Basics\" - they will help you take your basic object oriented programming game to the next level.  In this session, we'll take a close , yet gentle look at each of them, and you'll leave with the knowledge to start writing better code immediately.",
          "room": "Room 3",
          "speaker": {
            "web": "http://adambarney.com",
            "location": "Lincoln, NE",
            "name": "Adam Barney",
            "bio": "Monday, September 21, 2015\r\n3:27 PM\r\n\r\nAdam is a nerd. That kept me humble and nearly friendless (*sniff*) through school, but I wear it as a badge of honor now. After buying a Commodore 64 with money from his paper route in the 4th grade, he?s never stopped learning about computers and how to make these stupid machines do cool things. I am a Microsoft C# MVP and ASP Insider, running my independent consulting company from my home in Lincoln, NE. In my spare time, I run a user group and a couple developer conferences, and generally take on way more work than I have time for. I can also be found speaking at many mid-west user groups, code camps and developer conferences.",
            "img": null
          }
        }, {
          "session": "Applying Design Patterns to Everyday Problems",
          "time": "12:45 PM - 2:00 PM",
          "desc": "Have you read about design patterns but weren?t quite sure how or where to apply them in your application?  Have you heard of principles like loose coupling and programming to an abstraction, but didn?t know if you were really doing it right?  If so, this talk is for you.  \r\n\r\nIn this talk, I?ll work from several example code segments and show how to recognize which design pattern would be appropriate.  I?ll then show how to refactor the existing code to use the chosen design pattern and demonstrate how the resulting code is more understandable, easier to maintain and easier to test.\r\n\r\nAmong the examples I will show is how a dependency on an external system can be refactored using an interface and applying the bridge and adapter pattern. I?ll also show how to use the decorator pattern to cache results from an external call.  Finally, I?ll show examples of how patterns like the strategy pattern and chain of responsibility pattern can replace large blocks of if/else if statements to create a simpler design that is easier to test.\r\n\r\nWhen this talk is complete, you will have a good idea of how to recognize where these patterns can be applied in your code base and how you go about implementing them.",
          "room": "Room 4",
          "speaker": {
            "web": "http://buildingbettersoftware.blogspot.com/",
            "location": "Appleton, WI",
            "name": "David Berry",
            "bio": "I'm a Solutions Architect with over 20 years of experience in building software systems.  I started out as a Java developer and then switched to .NET in 2003.  I'm also a Pluralsight author and I've done lots of work in helping to mentor others in how to design and build great software systems.  I try to bring a pragmatic approach to everything I do, making sure the software I build is simple, understandable and balances responsibilities between different components of the system. When speaking or teaching, I emphasize real world scenarios encountered by developers every day and show how to solve them so you can be more effective at what you do.",
            "img": null
          }
        }, {
          "session": "So you want to build a mobile app... now what?",
          "time": "12:45 PM - 2:00 PM",
          "desc": "The mobile application landscape is packed with choices and making sense of the options can be confusing. Cordova, NativeScript, ReactNative, Xamarin, XCode, Android Studio -- and those are just the top six! In this session Mike will compare the strengths and weaknesses of the various types of mobile application development approaches and give practical suggestions as to which would be best suited to your development team.",
          "room": "Room 5",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "Kansas City, KS",
            "name": "Mike Cerny",
            "bio": "Mike is a full stack web and mobile programmer, who speaks to user groups about mobile application development. Passionate about new technology, Mike follows the latest trends in all area of mobile application development (especially Xamarin), JavaScript frameworks and TypeScript, and web application development with ASP.NET. Mike co-organizes the Kansas City Mobile .NET Developers Group.",
            "img": null
          }
        }, {
          "session": "Open Space / Fishbowl Discussion",
          "time": "12:45 PM - 2:00 PM",
          "desc": "An open discussion based on topics provided by you!",
          "room": "Room 6",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "Cedar Rapids, IA",
            "name": "Iowa Code Camp",
            "bio": "Sessions presented by Iowa Code Camp",
            "img": null
          }
        }, {
          "session": "Making Sense of the new ASP.NET Stack",
          "time": "2:15 PM - 3:30 PM",
          "desc": "We all know that things move pretty quickly in the web development world, but the changes coming from Microsoft over the last year or two have been positively dizzying. So much is open source now, and the ASP.NET web development stack is essentially brand new.  So what's a seasoned ASP.NET developer to do? In this session, I'll go through the major changes in the core of ASP.NET, as well as take a look at how the popular MVC framework has changed. Fear not - with a little understanding, you'll find yourself right at home in the new ASP.NET web development stack!",
          "room": "Prairie.Code() - Room 1",
          "speaker": {
            "web": "http://adambarney.com",
            "location": "Lincoln, NE",
            "name": "Adam Barney",
            "bio": "Monday, September 21, 2015\r\n3:27 PM\r\n\r\nAdam is a nerd. That kept me humble and nearly friendless (*sniff*) through school, but I wear it as a badge of honor now. After buying a Commodore 64 with money from his paper route in the 4th grade, he?s never stopped learning about computers and how to make these stupid machines do cool things. I am a Microsoft C# MVP and ASP Insider, running my independent consulting company from my home in Lincoln, NE. In my spare time, I run a user group and a couple developer conferences, and generally take on way more work than I have time for. I can also be found speaking at many mid-west user groups, code camps and developer conferences.",
            "img": null
          }
        }, {
          "session": "Azure: Move to the Cloud, not just a Remote Server",
          "time": "2:15 PM - 3:30 PM",
          "desc": "Intro to Web Apps, Web Jobs, and Storage Queues. Design, deployment, and maintenance strategies.\r\n\r\nMicrosoft Azure has come a long way since it was first announced 8 years ago. There are many tools available to make it easy for a developer to transition to the Cloud, and not just push your existing on-prem website to a remote Windows Server. In this talk we?ll cover some of the low hanging fruit within the Azure platform, including Web Apps (App Services), Web Jobs, and Message Queues, and demonstrate how easy it can be to start designing for the Cloud, and better utilize the tools available.\r\n\r\nWe'll start from `File > New Project` and have a solution designed for the cloud, written and deployed to Azure, within the first 30 minutes.",
          "room": "Room 2",
          "speaker": {
            "web": "http://stonefinch.com/",
            "location": "Des Moines, Iowa",
            "name": "Aaron Hoffman",
            "bio": "Aaron is the co-founder of Stonefinch, an Agile Development and Data Analytics Consultancy based in Des Moines, Iowa. He has been a tech enthusiast since childhood and has been writing software professionally for the past 10 years. He has experience working in various aspects of software and business development and is passionate about empowering developers and product teams through agile development, lean startup, and human-centered design. He is a leader of the .NET User Group in Des Moines and is an active member of the entrepreneur community.",
            "img": null
          }
        }, {
          "session": "Getting Started with ASP.NET Core 1.0 in Visual Studio Code",
          "time": "2:15 PM - 3:30 PM",
          "desc": "Microsoft's new cross-platform ASP.NET framework promises to appease those seeking modularization and performance improvements. Out with the kitchen sink that is the System.Web assembly, and in with the new. Couple this with a lightweight, cross-platform code editor which comprehends ASP.NET Core 1.0, and developers around the world rejoice. So let?s dive in! Open Visual Studio Code, and choose File -> New -> Project, right? Not quite! This talk will explore how to get started with ASP.NET Core 1.0, from the ground up, using Visual Studio Code. Along the way, we?ll discuss new features and how to take advantage of them in your applications.",
          "room": "Room 3",
          "speaker": {
            "web": "https://scottaddie.com/",
            "location": "Madison, WI",
            "name": "Scott Addie",
            "bio": "Scott Addie is a Microsoft Certified Solutions Developer (Web Applications), a Microsoft MVP (Visual Studio and Development Technologies), and a .NET Solutions Architect with CUNA Mutual Group in Madison, WI. He has over a decade of experience in full-stack enterprise application development using Microsoft web technologies and JavaScript. In his spare time, Scott can be found spending time with his wife and 3 kids, attending user groups, code camps, &amp; conferences, and blogging about ASP.NET and JavaScript at scottaddie.com.",
            "img": null
          }
        }, {
          "session": "Troubleshoot Like a Boss",
          "time": "2:15 PM - 3:30 PM",
          "desc": "Nobody's code is perfect, and all browsers don't run that code the exact same way. A developer can be staring at the weirdest issue ever with no clue where to begin troubleshooting. Sometimes, searching Stack Overflow for related issues can feel like an exercise in futility.  A developer?s mettle can be tested when this happens, so having the right tools and the proper mindset can mean the difference between a five minute fix, and an all-nighter. This presentation will reveal some troubleshooting tools and tips that a developer can start implementing to help fix issues before they bring the development team to a grinding halt.",
          "room": "Room 4",
          "speaker": {
            "web": "http://ryandoll.com",
            "location": "Lenexa, KS",
            "name": "Ryan Doll",
            "bio": "Ryan brings more than 11 years of development experience across multiple technologies at VML. As a Senior Development Engineer, he currently focuses on client-side and mobile development with technologies such as HTML5, JavaScript and CSS3. Since joining VML in 2005, Ryan's expertise has been utilized on a number of client engagements, including Sprint, Dell, Gatorade, Southwest Airlines, ESPN, Cartoon Network, Walmart, Sam's Club, Serengeti, Ford of Canada and Emerson Network Power. With a passion for technology and a desire to innovate, Ryan is always looking for new ways to take emerging technologies and combine them with creative ideas. Reliable and effective, he is seen as the go-to guy for many challenging VML projects.",
            "img": null
          }
        }, {
          "session": "Testing With Behat",
          "time": "2:15 PM - 3:30 PM",
          "desc": "Well tested code is important, but unit tests can suck. They're not fun to write, they can break if your implementation changes, sometimes they're hard to write, or it can not even test anything at all. What if we could test our code based on business requirements instead? In this talk, we'll go over Behat, a PHP behavior driven test tool that allows us to do just that.",
          "room": "Room 5",
          "speaker": {
            "web": "http://mlo.io",
            "location": "Fort Collins, CO",
            "name": "Matthew Loberg",
            "bio": "With a varied background in PHP, Python, Ruby, and DevOps Matt has had a lot of experience in his 6 years in the software world. He gets excited about easy to use well designed APIs and well tested code. He is currently working at MadWire in Fort Collins, Colorado, where he serves as a Senior Software Engineer. In his free time you can find him writing and recording music.",
            "img": null
          }
        }, {
          "session": "Introduction to ASP.NET Core Tag Helpers",
          "time": "2:15 PM - 3:30 PM",
          "desc": "In this session, we'll do a deep dive into ASP.NET Core Tag Helpers, one of the biggest features of the ASP.NET Core release.  We'll talk about what they are, why they're awesome, and why they're going to replace traditional HTML Helpers.  We'll also dive into demos, showing off some of the out-of-the-box Tag Helpers, and I'll show you how to make your own Tag Helper.",
          "room": "Room 6",
          "speaker": {
            "web": "http://scottsauber.com",
            "location": "Ankeny, Iowa",
            "name": "Scott Sauber",
            "bio": "I'm a technology enthusiast, mainly focused on web development and DevOps.  I primarily work with C#, JavaScript, HTML, CSS, and PowerShell.",
            "img": null
          }
        }, {
          "session": "Implementing DDD, Year One",
          "time": "3:45 PM - 5:00 PM",
          "desc": "Real life lessons from an organization implementing Domain Driven Design for the first time.  Talk will includes a detailed introduction into DDD strategic patterns and lessons learned during the first year from an organization implementing DDD.",
          "room": "Prairie.Code() - Room 1",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "Cedar Rapids, IA",
            "name": "Matt Winger",
            "bio": "I am a Senior Software Developer at Geonetric.  I am a Domain Driven Design enthusiast working on a second year of implementing DDD.",
            "img": null
          }
        }, {
          "session": "Modern Web Development Workflow backed by .NET",
          "time": "3:45 PM - 5:00 PM",
          "desc": "The client-side toolset is moving faster than the Visual Studio release cycle. While Visual Studio remains king of .NET development, modern web interfaces have shifted away from server-generated HTML and into JavaScript libraries like Angular, Ember, or React. The days of tightly-coupled server-client web frameworks are fading. Break your Web UIs out of Visual Studio; make them the isolated, testable, first-class citizens they should be, just like you would do for your Android and iOS applications. Learn how to create powerful, rich web interfaces using the right tools for the job while retaining server-side logic in the languages you know.",
          "room": "Room 2",
          "speaker": {
            "web": "http://www.aranasoft.com",
            "location": "St. Louis MO",
            "name": "Jeff Strauss",
            "bio": "Jeff is both a software consultant and a licensed attorney. Because of his unique experiences that combine technology and law, he is equally comfortable presenting to a room full of geeks or donning a suit to meet with corporate executives. He maintains a passion for solving problems with inspired solutions, improving life through technology. \r\n\r\nA dedicated member of the developer community, Jeff regularly travels to speak on both technical and business-oriented topics across the country. He is co-owner of Arana Software and enjoys the honor of serving on the board of directors for DevUp Conference (formerly St. Louis Days of .NET) and the St. Louis .NET User Group.",
            "img": null
          }
        }, {
          "session": "Don't Stress, Just WordPress",
          "time": "3:45 PM - 5:00 PM",
          "desc": "WordPress is a fantastic content management system, bringing web development to the domain of the average internet user.  Plugins and Themes take care of most of the work, but what about the inevitable necessity to make code changes?  For new developers, or developers more familiar with other environments, setting up a clean development workspace for this task may seem overwhelming.\r\n\r\nIn this discussion we will cover simple development workflows and readily available tools that will level up your professionalism and increase your effectiveness with your future WordPress development.",
          "room": "Room 3",
          "speaker": {
            "web": "https://dakotasoftworks.com",
            "location": "Cedar Rapids, IA",
            "name": "Seth Adam",
            "bio": "Seth Adam is principal and founder of Dakota Softworks, LLC, a custom software development firm in Cedar Rapids, IA.  Specializations include process automation, systems integration, and web and mobile application development.\r\n\r\nAt home at his soldering bench with an oscilloscope and controller boards, or knee deep in .NET code on his MacBook, Seth has been building electronics and working with operating systems and software since the mid '80s.  Additionally, he has around two decades of corporate and team development experience.\r\n\r\nSeth enjoys hearing about projects, problems, and ideas, and is happy to offer assistance when it may be needed.",
            "img": null
          }
        }, {
          "session": "I was too cheap to pay for a server, so I used AWS Lambda",
          "time": "3:45 PM - 5:00 PM",
          "desc": "What if you could only pay for when your code runs, and if you don?t run it that much you pay almost nothing? Sounds too good to be true, but it?s not completely false. AWS Lambda is a new hosting style that provides some unique benefits and challenges. If you?ve never heard of AWS Lambda or even ever messed with AWS at all this might be the talk for you. I?ll go over what Lambda is, why I think it could be useful in some cases, where I think it?s challenging, and some other fun things that come along with it.",
          "room": "Room 4",
          "speaker": {
            "web": "http://chuckrolek.com",
            "location": "Des Moines",
            "name": "Chuck Rolek",
            "bio": "Fueled by silliness and coffee I try to create efficiency in everything I and others do. I absolutely love technology, and I spend a vast majority of my time learning about it or teaching it to others. Recently I?ve made the jump to the consulting world and traded in my Front-end dev skills for the  DevOps/Nodejs stack.",
            "img": null
          }
        }, {
          "session": "Introduction to Bitcoin",
          "time": "3:45 PM - 5:00 PM",
          "desc": "This talk is an introduction into Bitcoin - the most widely used cryptocurrency. The talk explains various components of the Bitcoin network, how Bitcoin's are stored, and how two individuals transact over the Bitcoin network.",
          "room": "Room 5",
          "speaker": {
            "web": "https://suredbits.com",
            "location": "North Liberty, Iowa",
            "name": "Chris Stewart",
            "bio": "I'm a graduated from the University of Iowa a few years ago with a CS and Math degree. After briefly working for a Fortune 50 corporation I raised some pre-seed venture capital to found a Bitcoin company.",
            "img": null
          }
        }, {
          "session": "Send SMS Messages and Receive Phone Calls with Twilio in Under 60 Minutes",
          "time": "3:45 PM - 5:00 PM",
          "desc": "Want a more engaging way to interact with your users? Twilio allows to send and receive SMS message and phone calls. In this session we'll go through the nuts and bolts of using the Twilio service.",
          "room": "Room 6",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "West Des Moines",
            "name": "Jon von Gillern",
            "bio": "Jon is a Consultant from West Des Moines, Iowa. After his wife and kids, his love and passion lies with Regular Expressions, C#, Data Visualization and Azure.",
            "img": null
          }
        }, {
          "session": "Lightning Talks",
          "time": "10:30 AM - 11:45 AM",
          "desc": "5-10 minute talks supplied by you! Come prepared or be spontaneous!",
          "room": "Room 7",
          "speaker": {
            "web": "http://www.iowacodecamp.com",
            "location": "Cedar Rapids, IA",
            "name": "Iowa Code Camp",
            "bio": "Sessions presented by Iowa Code Camp",
            "img": null
          }
        }]
      }
    }
  });
}
