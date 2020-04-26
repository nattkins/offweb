<template>
    <layout>
        <h3>

{{$page.googleSheet.title}}
            </h3>

<g-image :src="$page.googleSheet.url" />
<div>{{$page.googleSheet.content}}</div>
    </layout>
</template>
<page-query>
query Post ($path: String!) {
  googleSheet (path: $path) {
    title
    content
    url
  }
}
</page-query>
<script>
export default {
    
}
</script>