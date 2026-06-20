import { createApp } from 'vue'
import { createPinia } from 'pinia'

// ===== FONT AWESOME =====
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router'

import {
  faPaw,
  faBookOpen,
  faMapMarkedAlt,
  faLightbulb,
  faTree,
  faLeaf,
  faQuestionCircle,
  faShieldAlt,
  faFire,
  faHandcuffs,
  faStar,
  faInfoCircle,
  faGraduationCap,
  faImage,
  faUserAstronaut,
  faBook,
  faEnvelope,
  faPaperPlane,

  // ===== NOVOS ÍCONES =====
  faArrowLeft,
  faLocationDot,
  faDrumstickBite,
  faDna,
  faRuler,
  faWeightScale,
  faDragon

} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPaw,
  faBookOpen,
  faMapMarkedAlt,
  faLightbulb,
  faTree,
  faLeaf,
  faQuestionCircle,
  faShieldAlt,
  faFire,
  faHandcuffs,
  faStar,
  faInfoCircle,
  faGraduationCap,
  faImage,
  faUserAstronaut,
  faBook,
  faEnvelope,
  faPaperPlane,

  // ===== NOVOS ÍCONES =====
  faArrowLeft,
  faLocationDot,
  faDrumstickBite,
  faDna,
  faRuler,
  faWeightScale,
  faDragon
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component(
  'font-awesome-icon',
  FontAwesomeIcon
)

app.mount('#app')
