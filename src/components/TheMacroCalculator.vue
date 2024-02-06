<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  msg: string
}>()

const activityLevel = ref("")
const height = ref("")
const weight = ref("")
const gender = ref("")
const age = ref("")

console.log(gender, "<--- gender");

</script>

<template>
 <body class="body">
  <div data-animation="default" data-collapse="medium" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" class="fn-navbar-box w-nav"></div>
  <div id="Home" class="fn-section-off-black">
    <div class="fn-container-grid">
      <div id="w-node-ecbcfc41-9e0e-153b-22b1-035c9f929654-9ae00eef" class="fn-label-jambo"></div>
      <h1 id="w-node-ecbcfc41-9e0e-153b-22b1-035c9f929656-9ae00eef" class="fn-heading-jambo"><span data-w-id="5ac4db46-089f-c372-dde1-7070f99f194e" class="text-span">SeekShape.</span><br>Empower <span class="text-span-2">Your</span> Journey, Shape <span class="text-span-3">Your </span>Reality</h1>
      <a id="w-node-ecbcfc41-9e0e-153b-22b1-035c9f92965b-9ae00eef" href="#" class="fn-get-a-demo-link w-inline-block"></a>
    </div>
  </div>
  <div id="Beta-Sign-Up" class="beta_signup">
    <div class="fn-container">
      <div class="fn-cta-banner-dark">
        <div id="w-node-_32c1f029-2452-1d0e-3d36-a894635963c9-9ae00eef" class="fn-banner-dark-column">
          <h1 class="fn-heading-2">Looking to take your fitness to another level ?</h1>
          <p class="fn-paragraph">Join our beta test group that will be the first set of users to have access to our fitness appp</p>
          <div id="Beta-Signup" class="fn-form w-form">
            <form id="wf-form-Beta-Signup" name="wf-form-Beta-Signup" data-name="Beta-Signup" method="get" class="fn-form-standard" data-wf-page-id="654e98383b16e8a89ae00eef" data-wf-element-id="596abdae-0ba4-7a09-3eb8-1de44841cd96"><input class="fn-field w-node-_596abdae-0ba4-7a09-3eb8-1de44841cd98-9ae00eef w-input" autocomplete="off" maxlength="256" name="Name-2" data-name="Name 2" placeholder="Name" type="text" id="Name-2" ><input class="fn-field w-node-_596abdae-0ba4-7a09-3eb8-1de44841cd97-9ae00eef w-input" autocomplete="off" maxlength="256" name="Email-3" data-name="Email 3" placeholder="Email" type="email" id="Email-3">
                  <div class="fn-form-wrapper"><label class="w-checkbox fn-checkbox-wrapper">
                  <div class="w-checkbox-input w-checkbox-input--inputType-custom fn-checkbox"></div><input type="checkbox" name="checkbox-3" id="checkbox-3" data-name="Checkbox 3" style="opacity:0;position:absolute;z-index:-1"><span class="w-form-label" for="checkbox-3">I agree to terms</span>
                </label></div><input type="submit" data-wait="Please wait..." class="fn-button-form w-button" value="Submit">
            </form>
            <div class="fn-success-message w-form-done">
              <div class="fn-success-message-wrapper">
                <div>Your information is submitted succesfully!</div>
              </div>
            </div>
            <div class="fn-error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div><img id="w-node-_32c1f029-2452-1d0e-3d36-a894635963d0-9ae00eef" sizes="(max-width: 767px) 100vw, (max-width: 991px) 47vw, 48vw" src="images/Frame-1-1-min.jpg" loading="lazy" alt="Flow Library Asset 4" srcset="images/Frame-1-1-min-p-500.jpg 500w, images/Frame-1-1-min-p-800.jpg 800w, images/Frame-1-1-min.jpg 1322w" class="fn-cta-banner-dark-image">
      </div>
    </div>
  </div>
  <div id="Macro-Calculator" class="beta_signup">
    <div class="fn-container-grid">
      <div id="w-node-ce2c483d-92dc-970f-33bc-4949928ec2d8-9ae00eef" class="fn-column">
        <h2 class="fn-heading-2">Fitness <br>Macronutrients<br>Calculator</h2>
        <p class="fn-paragraph">Answer a few simple questions about yourself, your activity level, and your goals. SeekShape Calculator interface makes it easy to provide the information needed for precise calculations.</p>
      </div>
      <div id="w-node-ce2c483d-92dc-970f-33bc-4949928ec2e3-9ae00eef" class="fn-form w-form">
        <form id="wf-form-Age" name="wf-form-Age" data-name="Age" method="get" class="fn-form-advance" data-wf-page-id="654e98383b16e8a89ae00eef" data-wf-element-id="ce2c483d-92dc-970f-33bc-4949928ec2e4"><input class="fn-field w-input" autocomplete="off" maxlength="256" name="Age" data-name="Age" placeholder="Age" type="text" id="Age"><input class="fn-field w-input" autocomplete="off" maxlength="256" name="Height-CM" data-name="Height(CM)" placeholder="Height (CM)" type="text" id="Height-CM">
          <input class="fn-field w-input" autocomplete="off" maxlength="256" name="Weight-KG" data-name="Weight(KG)" placeholder="Weight(KG)" type="text" id="Weight-KG">
          <div id="w-node-_1387c912-8e81-8fa0-8da8-26c10c150885-9ae00eef" class="form-label">Activity:</div><select id="Activity" name="Activity" data-name="Activity" class="fn-select-field w-node-ce2c483d-92dc-970f-33bc-4949928ec2e9-9ae00eef w-select">
            <option value="sendentary">Little to no exercise</option>
            <option value="light">Light (exercise 1-3 time/week)</option>
            <option value="Active">Active (4-5 times a week exercise)</option>
            <option value="Very active">Very Active (6-7 times a week)</option>
            <option value="Extra Active">Extra Active ( Intense daily exercise / physical job0</option>
          </select>
          <div id="w-node-dc56a244-d4b5-bd63-feb0-6236fb483e4d-9ae00eef" class="form-label">Your Goal:</div><select id="Select-2" name="Select-2" data-name="Select 2" class="fn-select-field w-node-_067bdf6d-1576-7005-395e-f1631db65bce-9ae00eef w-select">
            <option value="maintain">Maintain weight</option>
            <option value="MidWeightLoss">Mild Weight Loss of 0.5lb (0.5kg) per week</option>
            <option value="ExtremeWeightLoss">Extreme Weight Loss of 2lbs (1kg) per week</option>
            <option value="MildWeightGain">Mild Weight Gain of 0.5lbs(0.25kg) per week</option>
            <option value="ExtemeWeightGain">Extreme Weight Gain of 2lbs (1kg) per week</option>
          </select>
          <div id="w-node-ce2c483d-92dc-970f-33bc-4949928ec2ec-9ae00eef" class="fn-radio-buttons-wrapper"><label class="fn-radio-wrapper w-radio">
              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom fn-radio-button w-radio-input"></div><input type="radio" name="Radio" id="Male" data-name="Radio 11" style="opacity:0;position:absolute;z-index:-1" value="Male"><span class="w-form-label" for="Male">Male</span>
            </label><label class="fn-radio-wrapper w-radio">
              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom fn-radio-button w-radio-input"></div><input type="radio" name="Radio" id="Female" data-name="Radio 11" style="opacity:0;position:absolute;z-index:-1" value="Female"><span class="w-form-label" for="Female">Female</span>
            </label></div>
          <div id="w-node-ce2c483d-92dc-970f-33bc-4949928ec30e-9ae00eef" class="fn-form-wrapper"><input type="submit" data-wait="Please wait..." class="fn-button-form w-button" value="Submit"></div>
        </form>
        <div class="fn-success-message w-form-done">
          <div class="fn-success-message-wrapper">
            <div>Your information is submitted succesfully!</div>
          </div>
        </div>
        <div class="fn-error-message w-form-fail">
          <div>Something went wrong, check the validity of your information.</div>
        </div>
      </div>
    </div>
  </div>
  <div class="fn-footer-second">
    <div class="fn-container-grid">
      <div id="w-node-_18503f12-dc1c-4c75-b557-fab8eaf8b084-9ae00eef" class="fn-footer-line"></div>
      <div id="w-node-_18503f12-dc1c-4c75-b557-fab8eaf8b085-9ae00eef" class="fn-legal-links-wrapper">
        <a href="#" class="fn-brand-box w-nav-brand"></a>
        <a href="#Home" class="fn-standard-white-link">Home</a>
        <a href="#Beta-Sign-Up" class="fn-standard-white-link">Beta Sign Up</a>
        <a href="#Macro-Calculator" class="fn-standard-white-link">Macro Calculator</a>
      </div>
      <div id="w-node-_18503f12-dc1c-4c75-b557-fab8eaf8b08e-9ae00eef" class="fn-legal-links-wrapper">
        <a href="#" class="fn-footer-legal-link">Privacy Policy</a>
        <a href="#" class="fn-footer-legal-link">Terms &amp; Conditions</a>
        <div class="fn-footer-copyright">SeekShape, 2024</div>
      </div>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=654e98383b16e8a89ae00eeb" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  </body>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
