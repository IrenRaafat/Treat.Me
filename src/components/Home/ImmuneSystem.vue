<template>
    <div class="container">
        <div class="m-5">
        <div class="row imag m-auto p-auto py-5">
            <img  src="../../assets/system-image/immune-system.jpg" class="w-10 h-10" alt="">
        </div>
        <div class="row">
            <h3 class="mb-4">Immune System</h3>
        </div>
        <div class="row">
            <p class="text-start">
                The immune system is a network of biological systems that protects an organism from diseases. It detects and responds to a wide variety of pathogens, from viruses to parasitic worms, as well as cancer cells and objects such as wood splinters, distinguishing them from the organism's own healthy tissue. Many species have two major subsystems of the immune system.
                The innate immune system provides a preconfigured response to broad groups of situations and stimuli. The adaptive immune system provides a tailored response to each stimulus by learning to recognize molecules it has previously encountered. Both use molecules and cells to perform their functions.
            </p>
            <h4 class="text-start">Organ Organs</h4>
            <div class=" m-auto p-auto">
           
                <ul class="text-start">
                <li>Lymph nodes</li>
                <li>Spleen</li>
                <li>Thymus gland</li>
                <li>Lymphocyte</li>
               
                </ul>
            </div>
            <h4 class="text-start">Disorders of the Immune System</h4>
            <p class="text-start">Your immune system is your body’s defense against infections and other harmful invaders. Without it, you would constantly get sick from bacteria or viruses.</p>
            <p class="text-start">The lymph, or lymphatic, system is a major part of the immune system. It's a network of lymph nodes and vessels. Lymphatic vessels are thin tubes that branch, like blood vessels, throughout the body. They carry a clear fluid called lymph. Lymph contains tissue fluid, waste products, and immune system cells. Lymph nodes are small, bean-shaped clumps of immune system cells that are connected by lymphatic vessels. They contain white blood cells that trap viruses, bacteria, and other invaders, including cancer cells.</p>
            <p class="text-start">White blood cells are the cells of the immune system. They are made in one of your lymph organs, the bone marrow. Other lymph organs include the spleen and thymus.</p>
            <h4 class="text-start">What can go wrong with your immune system?</h4>
            <p class="text-start">When your immune system doesn't work the way it should, it is called an immune system disorder. You may:</p>
            <ul class="text-start">
                <li>Be born with a weak immune system. This is called primary immune deficiency.</li>
                <li>Get a disease that weakens your immune system. This is called acquired immune deficiency.</li>
                <li>Have an immune system that is too active. This may happen with an allergic reaction.</li>
                <li>Have an immune system that turns against you. This is called autoimmune disease.</li>
            </ul>
            <h4 class="text-start">Immune system disorders</h4>
            <p class="text-start">Here are some common examples:</p>
            <ul>
                <li><strong> Severe combined immunodeficiency (SCID).</strong> This is an example of an immune deficiency that is present at birth. Children are in constant danger of infections from bacteria, viruses, and fungi. This disorder is sometimes called “bubble boy disease.” In the 1970s, a boy had to live in a sterile environment inside a plastic bubble. Children with SCID are missing important white blood cells.</li>
                <li><strong>Temporary acquired immune deficiencies.</strong> Your immune system can be weakened by certain medicines, for example. This can happen to people on chemotherapy or other drugs used to treat cancer. It can also happen to people following organ transplants who take medicine to prevent organ rejection. Also, infections like the flu virus, mono (mononucleosis), and measles can weaken the immune system for a brief time. Your immune system can also be weakened by smoking, alcohol, and poor nutrition.</li>
                <li><strong>AIDS.</strong> HIV, which causes AIDS, is an acquired viral infection that destroys important white blood cells and weakens the immune system. People with HIV/AIDS become seriously ill with infections that most people can fight off. These infections are called “opportunistic infections” because they take advantage of weak immune systems. </li>
            </ul>
            <h4 class="text-start">An overactive immune system</h4>
            <p class="text-start">If you are born with certain genes, your immune system may react to substances in the environment that are normally harmless. These substances are called allergens. Having an allergic reaction is the most common example of an overactive immune system. Dust, mold, pollen, and foods are examples of allergens.</p>
            <P class="text-start">Some conditions caused by an overactive immune system are:</P>
            <ul class="text-start">
                <li>Asthma. The response in your lungs can cause coughing, wheezing, and trouble breathing. Asthma can be triggered by common allergens like dust or pollen or by an irritant like tobacco smoke.</li>
                <li>Eczema. An allergen causes an itchy rash known as atopic dermatitis.</li>
                <li>Allergic rhinitis. Sneezing, a runny nose, sniffling, and swelling of your nasal passages from indoor allergens like dust and pets or outdoor allergens like pollens or molds. </li>
            </ul>
            <h4 class="text-start">Autoimmune disease</h4>
            <p class="text-start">In autoimmune diseases, the body attacks normal, healthy tissues. The cause is unknown. It is probably a combination of a person’s genes and something in the environment that triggers those genes.</p>
            <p class="text-start">Three common autoimmune diseases are:</p>
            <ul class="text-start">
                <li><strong>Type 1 diabetes.</strong> The immune system attacks the cells in the pancreas that make insulin. Insulin removes sugar from the blood to use as energy.</li>
                <li><strong>Rheumatoid arthritis.</strong> This type of arthritis causes swelling and deformities of the joints. An auto-antibody called rheumatoid factor is in the blood of some people with rheumatoid arthritis.</li>
                <li><strong>Lupus.</strong> This disease that attacks body tissues, including the lungs, kidneys, and skin. Many types of auto-antibodies are found in the blood of people with lupus.</li>
 
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
        name:'ImmuneSystem'
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
/* ul{
    list-style-position: inside;
   
} */
</style>