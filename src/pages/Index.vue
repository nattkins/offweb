<template>
  <Layout>


    <h1>Hello, world!</h1>
<section>
<g-link v-for="page in $page.allGoogleSheet.edges" :key= "page.Id" :to="page.node.Id">
 <p>{{page.node.title}}</p>
</g-link> 

</section>  

  
  </Layout>
</template>
<page-query>
 query {
allGoogleSheet {
  edges {
    node{
      Id
      title
    }
  }
}  
}

</page-query>
<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
