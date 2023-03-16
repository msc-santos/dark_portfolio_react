import SVG_JS from 'src/assets/svgs/icons8-javascript.svg';
import SVG_VUE from 'src/assets/svgs/icons8-vue-js.svg';
import SVG_CSS from 'src/assets/svgs/icons8-css3.svg';
import IMG_HTML from 'src/assets/images/icons8-html-66.png';
import IMG_JQUERY from 'src/assets/images/icons8-jquery-150.png';


import SVG_NODE from 'src/assets/svgs/icons8-nodejs.svg';
import SVG_EXPRESS from 'src/assets/svgs/icons8-express-js.svg';
import SVG_PHP from 'src/assets/svgs/icons8-logo-php.svg';
import IMG_LARAVEL from 'src/assets/images/icons8-laravel-96.png';

import SVG_MYSQL from 'src/assets/svgs/icons8-logo-mysql.svg';
import IMG_DB from 'src/assets/images/icons8-restauração-de-banco-de-dados-80.png';
import IMG_DOCKER from 'src/assets/images/icons8-docker-96.png';

import { IconSkill } from 'src/interfaces/IconsSkills';

export const iconslanguages: Array<IconSkill> = [
  {
    icon: SVG_JS,
    alt: 'javascript icon'
  }, {
    icon: SVG_PHP,
    alt: 'php icon'
  }, {
    icon: SVG_CSS,
    alt: 'css icon'
  }, {
    icon: IMG_HTML,
    alt: 'html image'
  },
]

export const iconsFrameworks: Array<IconSkill> = [
  {
    icon: SVG_NODE,
    alt: 'node icon'
  }, {
    icon: SVG_VUE,
    alt: 'vue icon'
  }, {
    icon: SVG_EXPRESS,
    alt: 'express icon'
  }, {
    icon: IMG_LARAVEL,
    alt: 'laravel icon'
  }, {
    icon: IMG_JQUERY,
    alt: 'jquery image'
  }
]

export const iconsTools: Array<IconSkill> = [
  {
    icon: SVG_MYSQL,
    alt: 'mysql icon'
  }, {
    icon: IMG_DB,
    alt: 'db icon'
  }, {
    icon: IMG_DOCKER,
    alt: 'docker icon'
  }
]