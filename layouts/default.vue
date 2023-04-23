<template>
    <div>
      <Header></Header>
      <Banner></Banner>
      <nuxt/>
      <About/>
    </div>
  </template>
  <script>
  import Header from "@/components/common/Header"
  import Banner from "@/components/common/Banner"
  import About from "../components/home/About"
  export default{
    components:{
      Header,
      Banner,
      About,
    }
  }
  </script>
  
  <style>
  
  </style>
  