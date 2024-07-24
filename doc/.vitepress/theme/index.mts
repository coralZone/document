import {Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { useRouter } from "vitepress"
import { h } from "vue"
/**
 * @type {import('vitepress').Theme}
*/
export default {
    extends:DefaultTheme,
    enhanceApp({router,app}) {
        
    },
} as Theme