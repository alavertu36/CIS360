<template>
    <div class="my-container-outer hero" id="hero-blog">
        <div class="my-container-row">
            <!-- left side container -->
            <div class="my-item my-item-center-horizontal">
                <div id="headline-title-container">
                    <h1>About The Team</h1>
                </div>
            </div>
        </div>
    </div>

    <!-- CONTENT SECTION -->
    <div class="my-container-outer">
        <div class="my-container-row">
            <div class="my-item">
                <!-- 1st article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Alexander L.</h2>
                    <p><b>Infrastructure Architect:</b> Alex plays a pivotal role in laying the groundwork for the
                        project's
                        infrastructure through Vue.js and Node.js. His contributions, shared via the GitHub repository,
                        provide the foundation upon which the website is built, ensuring scalability, efficiency, and
                        reliability in its architecture.</p>
                    <li>Email: alavertu@colostate.edu</li>
                </div>
                <!-- 2nd article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Jakob R.</h2>
                    <p><b>Team Leader:</b> Jakob plays a pivotal role as the team leader, orchestrating the group
                        dynamics and
                        ensuring cohesion among team members. His leadership skills are instrumental in keeping the
                        project on track and fostering a collaborative environment where everyone can thrive.</p>
                    <li>Email: jcorncob@colostate.edu</li>
                </div>
                <!-- 3rd article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Brendan S.</h2>
                    <p><b>Information Management Specialist:</b> Brendan excels in sourcing and disseminating crucial
                        information within the group. His adept communication skills and problem-solving abilities
                        streamline the flow of information, enhancing collaboration and decision-making processes among
                        team members.</p>
                    <li>Email: bsull895@colostate.edu</li>
                </div>
                <!-- 4th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Triton R.</h2>
                    <p><b>Technical Expert and Communicator:</b> Triton brings technical proficiency and clear
                        communication
                        skills to the team. His expertise in technology coupled with effective communication ensures
                        smooth collaboration and understanding among team members, facilitating the implementation of
                        technical aspects of the project.</p>
                    <li>Email: triton@colostate.edu</li>
                </div>
                <!-- 5th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Parker H.</h2>
                    <p><b>Documentation and Writing Specialist:</b> Parker is instrumental in maintaining detailed
                        project
                        documentation and ensuring clarity in written communication. His adept writing skills and
                        technological proficiency contribute to the creation of comprehensive project documents, which
                        serve as valuable resources for the team's progress.</p>
                    <li>Email: parkerjh@colostate.edu</li>
                </div>
                <!-- 6th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Spencer G.</h2>
                    <p><b>Communication and Teamwork Facilitator:</b> Spencer excels in fostering effective
                        communication and
                        teamwork within the group. His strong communication skills and collaborative approach facilitate
                        seamless interaction among team members, promoting a supportive and productive team environment.
                    </p>
                    <li>Email: gilmores@colostate.edu</li>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style>
/* Now, style my CSS classes */
.my-container-outer {
    /* border: 3px dashed yellow; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.my-container-row {
    /* border: 3px solid red; */
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.my-item {
    /* border: 3px dotted green; */
    /* Expand by 1 / Shrink by 1 / Original size is 300px */
    flex: 1 1 300px;
    padding: 20px;
}

.hero {
    padding: 50px 10px;
}

.my-item-center-horizontal {
    display: flex;
    justify-content: center;
}

.side-article {
    margin-top: 30px;
    margin-bottom: 20px;

    h5,
    h3,
    p {
        margin: 10px 0px;
    }
}

#headline-title-container {
    box-shadow: 0px 0px 30px rgba(0, 0, .3);
    padding: 30px 30px 30px 40px;
    max-width: 1000px;
    text-align: center;
    margin-left: auto;
}
</style>