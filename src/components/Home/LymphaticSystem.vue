<template>
    <div class="container">
        <div class="m-5">
        <div class="row imag m-auto p-auto py-5">
            <img  src="../../assets/system-image/lymphatic-system.jpg" class="w-10 h-10" alt="">
        </div>
        <div class="row">
            <h3 class="mb-4">Lymphatic System</h3>
        </div>
        <div class="row">
            <p class="text-start">
                Your lymphatic system is a group of organs, vessels and tissues that protect you from infection and keep a healthy balance of fluids throughout your body. Lymphatic system organs include your bone marrow, thymus and lymph nodes. Swollen lymph nodes are a sign of common infections, like strep throat, but also more serious diseases like cancer.
                The lymphatic system, or lymphoid system, is an organ system in vertebrates that is part of the immune system, and complementary to the circulatory system. It consists of a large network of lymphatic vessels, lymph nodes, lymphoid organs, lymphoid tissues and lymph.
            </p>
            <h4 class="text-start">Organ Organs</h4>
            <div class=" ">
           
                <ul class="text-start">
                <li>Lymphatic Vessel</li>
               
                </ul>
            </div>
            <h4 class="text-start">What conditions and disorders affect the lymphatic system?</h4>
            <p class="text-start">Many conditions can affect the various parts of your lymphatic system. Some happen during development before birth or during childhood. Others develop as a result of disease or injury. Some common diseases and disorders of the lymphatic system include:</p>
            <ul class="text-start">
                <li><strong> Swollen lymph nodes (lymphadenopathy).</strong> Infection, inflammation and cancer cause swollen (enlarged) lymph nodes. Common infections that can cause enlarged lymph nodes include strep throat, mononucleosis, HIV and infected skin wounds. Lymphadenitis refers to lymphadenopathy that’s caused by an infection or inflammatory condition.</li>
                <li><strong>Swelling or accumulation of fluid (lymphedema).</strong> A blockage in your lymphatic system due to scar tissue from damaged lymph vessels or nodes can cause lymphedema. It can also happen when your lymph nodes have been removed to treat a condition like cancer. With lymphedema, fluid most commonly builds up in your arms or legs. It can be very mild or quite painful and disabling. People with lymphedema are at risk for serious and potentially life-threatening deep skin infections.</li>
                <li><strong>Cancers of the lymphatic system.</strong>Lymphoma is cancer of the lymph nodes that occurs when lymphocytes grow and multiply uncontrollably. There are several different types of lymphoma, including Hodgkin’s lymphoma and non-Hodgkin’s lymphoma. Cancerous tumors can also block lymphatic ducts or be near lymph nodes and interfere with the flow of lymph through the node.</li>
            </ul>
            <p class="text-start">Other disorders include:</p>
            <ul class="text-start">
                <li><strong> Lymphangitis.</strong> This is an inflammation of your lymph vessels.</li>
                <li><strong>Lymphangioma.</strong> This is a condition that you’re born with. It involves the presence of noncancerous, fluid-filled bumps (cysts) under your skin due to overgrown lymph vessels.</li>
                <li><strong>Intestinal lymphangiectasia.</strong> Loss of lymph tissue in your small intestine leads to loss of protein, gamma globulins, albumin and lymphocytes.</li>
                <li><strong>Lymphocytosis.</strong> With this condition, there’s a higher-than-normal amount of lymphocytes in your body.</li>
                <li><strong>Lymphatic filariasis.</strong> This is a parasitic infection that causes the lymphatic system to malfunction.</li>
                <li><strong>Castleman disease.</strong> Castleman disease involves an overgrowth of cells in your body’s lymphatic system.</li>
                <li><strong>Lymphangioleiomyomatosis.</strong> This is a rare disease in which abnormal muscle-like cells begin to grow out of control in your lungs, lymph nodes and kidneys.</li>
                <li><strong>Autoimmune lymphoproliferative syndrome.</strong> This is a rare genetic disorder in which there’s a high number of lymphocytes in your lymph nodes, liver and spleen.</li>
                <li><strong>Mesenteric lymphadenitis.</strong> This is an inflammation of the lymph nodes in your belly (abdomen).</li>
            </ul>
            <h4 class="text-start">How can I keep my lymphatic system healthy?</h4>
            <p class="text-start">To keep your lymphatic system strong and healthy, you should:</p>
            <ul class="text-start">
                <li>Avoid exposure to toxic chemicals like those in pesticides or cleaning products. These chemicals can build up in your system and make it harder for your body to filter waste.</li>
                <li>Drink plenty of water to stay hydrated so lymph can easily move throughout your body.</li>
                <li>Keep a healthy lifestyle that includes regular exercise and a nutritious diet. Your provider can give you specific advice tailored to your medical history and needs.</li>
            </ul>
            <h4 class="text-start">When should I call my healthcare provider?</h4>
            <p class="text-start">Call a healthcare provider if you have:</p>
            <ul class="text-start">
                <li>Fatigue (extreme tiredness).</li>
                <li>Swollen lymph nodes, which may be a sign of common infections (like strep throat) or more serious conditions like cancer or HIV.</li>
                <li>Unexplained swelling that lasts more than a few weeks or interferes with your daily activities.</li>
            </ul>
       
            <router-link to="/home"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg> Back to Home</p></router-link>
        </div>
 
    </div>
    </div>
</template>
 
<script>
    export default {
        name:'LymphaticSystem'
    }
</script>
 
<style scoped>
 
.imag{
    width: 35%;
    height: 35%;
}
h3 ,h4{
    color:#3a4793
}
ul{
    list-style-position: inside;
   
}
</style>