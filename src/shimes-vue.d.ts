// 帮助ts应该如何理解.vue文件
declare module '*.vue'{
    import { ComponentOptions } from "vue";
    const componentOptions:ComponentOptions
    export default componentOptions
}
// 帮助ts应该如何理解.md文件
declare module '*.md'{
    const str:string
    export default str
}