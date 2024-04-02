<template>
    <div class="container">
        <div class="m-5">
        <div class="row imag m-auto p-auto py-5">
            <img  src="../../assets/system-image/circulatory-system.jpg" class="w-10 h-10" alt="">
        </div>
        <div class="row">
            <h3 class="mb-4">Circulatory System</h3>
        </div>
        <div class="row">
            <p class="text-start">
                The blood circulatory system is a system of organs that includes the heart, blood vessels, and blood which is circulated throughout the entire body of a human or other vertebrate. It includes the cardiovascular system, or vascular system, that consists of the heart and blood vessels (from Greek kardia meaning heart, and from Latin vascula meaning vessels).
                The circulatory system has two divisions, a systemic circulation or circuit, and a pulmonary circulation or circuit. Some sources use the terms cardiovascular system and vascular system interchangeably with the circulatory system.
            </p>
            <h4 class="text-start">Organ Organs</h4>
            <div class="t-center m-auto p-auto">
           
                <ul class="text-start">
                <li>The Heart</li>
                <li>Blood Vessels</li>
               
                </ul>
            </div>
            <h4 class="text-start">What are the symptoms of a circulatory disorder?</h4>
            <p class="text-start">Signs and symptoms of a circulatory disorder may include:</p>
            <ul class="text-start">
                <li><strong> Chest pain,</strong> including tightness, pressure and discomfort</li>
                <li><strong>Breathlessness</strong></li>
                <li><strong>Pain,</strong> numbness or weakness in your legs or arms</li>
                <li><strong>Cold intolerance</strong></li>
                <li><strong>Ulcers,</strong> which do not heal </li>
            </ul>
            <h4 class="text-start">Which diseases can affect the circulatory system?</h4>
            <p class="text-start">The diseases that can affect the circulatory system include:</p>
            <ul class="text-start">
                <li><strong> Atherosclerosis</strong> - the hardening of the arteries</li>
                <li><strong>Heart attack</strong> - when the blood supply is cut off from the heart</li>
                <li><strong>Mitral valve prolapse</strong> - the mitral valve does not close properly </li>
                <li><strong>Mitral valve regurgitation</strong> - where the mitral valve leaks</li>
                <li><strong>Mitral stenosis</strong> - the valve is abnormally narrow</li>
                <li><strong>Angina pectoris </strong>- 'pain in the chest' when the heart is not receiving enough blood</li>
                <li><strong>Arrhythmias</strong> and<strong> dysrhythmia</strong> - abnormal heart rates</li>
                <li><strong>]Cardiac ischaemia</strong> - the heart is not receiving enough oxygen</li>
                <li><strong>High cholesterol</strong> - which blocks blood flow</li>
                <li><strong>Heart failure</strong> - the heart is not pumping blood correctly</li>
                <li><strong>Hypertension</strong> - the blood pressure is flowing with a high force</li>
                <li><strong>Stroke</strong> - a vessel to the brain is blocked </li>
                <li><strong>Peripheral artery disease</strong> - narrowing of the arteries leading to the legs, stomach, arms and head</li>
                <li><strong>Venous thromboembolism</strong> - a blood clot stuck in a vein</li>
                <li><strong>Aortic aneurysm</strong> - the artery becomes enlarged</li>
            </ul>
            <h4 class="text-start">What increases the risk of a circulatory system disease?</h4>
            <p class="text-start">Some risk factors can be modified, such as being overweight, lack of exercise, smoking, excess alcohol consumption, being highly-stressed, and a poor diet. </p>
            <p class="text-start">There are some risk factors that cannot be controlled, including older age, family history of heart disease, and certain ethnicities.</p>
            <h4 class="text-start">How can circulatory disorders be prevented?</h4>
            <p class="text-start">There are many things that can be done to lower the risk of a circulatory disorder. Many of these diseases are linked to one another, for example, high blood pressure can damage the blood vessels, and that can lead to other circulatory problems.</p>
            <p class="text-start">In order to prevent a circulatory disorder, you can eat a healthy, well-balanced diet to reduce your weight, start regularly exercising, and if one of your family members has a diagnosed heart problem, you should make sure you have regular check-ups with your doctor to monitor your own heart health with screenings. </p>
       
            <router-link to="/home"><p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
              </svg> Back to Home</p></router-link>
        </div>
 
    </div>
    </div>
</template>
 
<script>
    export default {
        name:'CirculatorySystem'
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
ul:nth-child(1){
    list-style-position: inside;
   
}
</style>