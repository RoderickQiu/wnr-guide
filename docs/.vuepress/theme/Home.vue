<template>
  <div class="home__container container">
    <div class="home__header row">
      <div class="home__title col-3">
        <img
          src="https://i.loli.net/2020/12/26/pOAiXjwIdMZEBzt.png"
          id="logo"
        />
        {{ title }}
      </div>
      <div class="home__topbar col-9 text-right">
        <div id="topbar1" v-html="topbar1"></div>
        <div id="topbar2" v-html="topbar2"></div>
      </div>
      <p class="home__description1 col-12">{{ description1 }}</p>
      <p class="home__description2 col-12">{{ description2 }}</p>
    </div>
    <div class="home__body row">
      <div class="home__content content__container">
        <Content custom />
      </div>
    </div>
    <footer class="home__footer" v-html="footer"></footer>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'

import { localizePath } from './utils'
import Button from './components/Button'

const md = new MarkdownIt()

export default {
  mounted() {},
  components: {
    Button,
  },
  computed: {
    data() {
      return this.$page.frontmatter
    },
    title() {
      return this.$page.frontmatter.title || this.$title || 'Hello, World.'
    },
    topbar1() {
      const defaultTopbar =
        'Power by [vuepress](https://github.com/vuejs/vuepress).'
      return md.render(this.data.topbar[0] || defaultTopbar)
    },
    topbar2() {
      return md.render(this.data.topbar[1] || '')
    },
    description1() {
      return (
        this.$page.frontmatter.description1 ||
        this.$page.description1 ||
        this.$description1 ||
        '📦 🎨 A api-friendly theme for VuePress.'
      )
    },
    description2() {
      return (
        this.$page.frontmatter.description2 ||
        this.$page.description2 ||
        this.$description2 ||
        '📦 🎨 A api-friendly theme for VuePress.'
      )
    },
    footer() {
      const defaultFooter =
        'Open Source on [GitHub](https://github.com/sqrthree/vuepress-theme-api), Made by [@sqrthree](https://github.com/sqrthree), Power by [vuepress](https://github.com/vuejs/vuepress).'
      return md.render(this.data.footer || defaultFooter)
    },
  },
}
</script>

<style lang="stylus">
@import './styles/_variables.styl';

.home {
  color: $textColor;

  &__header {
    margin: 3rem 0 1rem 0;
    text-align: center;
    align-content: center;

    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }
  }

  &__title {
    font-size: 46px;
    font-weight: 400;
    top: -3rem;
    left: 1rem;
    text-align: left;
    position: relative;

    @media screen and (max-width: 768px) {
      #logo {
        display: none;
      }
    }
  }

  &__topbar {
    font-size: 17px;
    font-weight: 400;
    top: -2rem;
    right: 1rem;
    text-align: right;
    position: relative;

    a {
      color: $textColor !important;
      margin-right: 1rem;
    }

    #topbar2 {
      margin-top: -1rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 13px;
      top: -1.8rem;

      a {
        margin-right: 0.3rem;
      }
    }
  }

  &__description1 {
    padding: 0 10%;
    margin-top: 1rem;
    margin-bottom: 0rem;
    font-size: 32px;
    font-weight: bolder;
    color: $black;
  }

  &__description2 {
    padding: 0 10%;
    margin-top: 1rem;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    color: $black;
  }

  &__body {
    justify-content: center;
    text-align: center;
  }

  &__content {
    padding: 0rem 4rem 4rem 4rem;
  }

  &__footer {
    margin: 2rem 0;
    text-align: center;
  }
}
</style>

<style>
hr {
  margin: 50px;
  color: #00000039 !important;
  border-width: 0.39px;
}

img {
  width: 48% !important;
}

#logo {
  width: 46px !important;
  height: 46px !important;
}

@media screen and (max-width: 720px) {
  img {
    width: 100% !important;
  }
}

.btn {
  width: 225px;
  height: 50.8px;
  padding: 1.2em 0em;
  margin: 5px;
}

.btn--default {
  border-color: #4a9af6;
  background-color: #5490ea;
}

.btn--default:hover {
  border-color: #ea5454cc;
  background-color: #f9f9f9;
  color: #ea5454;
}
</style>
