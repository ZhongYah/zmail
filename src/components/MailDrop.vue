<template>
  <div>
    <a href="/">
    <h1>
      <img src="../assets/email.png" alt="Image">
      Zmail
    </h1>
    </a> 
    <h3>
      <img src="../assets/star.png" alt="Image">
      ZhongYah@zmail.com
    </h3>
    <div class="legend">
      <span>Checkbox click to mark as read</span>
      <span>
        <span class="isread-box"></span> = Have read
      </span>
      <span>
        <span class="unread-box"></span> = Unread 
      </span>
    </div>
    <div class="demo">
      <div
        v-for="job in allPosts"
        :key="job.id"
        class="infrom"
        v-bind:class="{'is-read':job.read}"
      >
        <input type="checkbox" @click="haveRead(job)">
        <span class="number">{{ job.id + '.'}}</span>
        <span class="person">{{'(' + job.email + ')'}}</span>

        <router-link :to="{name:'Details',params:{id:job.id}}" rel="stylesheet" type="text/css" href="reset.css">
          <p>{{ job.body.substring(0,70) + '.......'}}</p>
        </router-link>

        <i @click="deletePost(job.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MailDrop",
  methods: {
    ...mapActions(["fetchPosts", "deletePost", "updatePost"]),
    haveRead(job) {
      const updJob = {
        id: job.id,
        email: job.email,
        body: job.body,
        read: !job.read,
      };

      this.updatePost(updJob);
    },
   
  },
  computed: mapGetters(["allPosts"]),
  created() {
    this.fetchPosts();
  }
};
</script>

<style>
input[type="checkbox"] {
  transform: scale(1.5);
  position: absolute;
  right:7px;
}

.number {
  position: absolute;
  left:5px;
  top:30px;
  display: inline-block;
  font-size: 20px;
  color:rgb(68, 76, 131);
}

.person{
  position: absolute;
  left: 40px;
  top:35px;
  font-size: 18px;
  color: rgb(159, 94, 94);
}

p{
  width: 1000px;
  position: relative;
  left:300px;
  font-size: 20px;
  color:rgb(32, 90, 185)
}

.demo {
  display: block;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  opacity: 0.9;
}

.infrom {
  border: 1px solid #ccc;
  background: #d3d3e4;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.is-read {
  background: #2d353d;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  font-size: 18px;
}

.unread-box {
  position: relative;
  top:3px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #d3d3e4;
  border-radius: 50%;
}

.isread-box {
  position: relative;
  top:3px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #2d353d;
  border-radius: 50%;
}

.fas fa-trash-alt{
  position: absolute;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

h3 img{
  transform: scale(0.8);
  position: relative;
  top:8px;
}

h1 img{
  transform: scale(1.6);
  padding: 15px;
  position: relative;
  top:7px;
}

h1{
  position: absolute;
  top:-50px;
  font-size: 60px;
  color: #a9a9b9;
  font-family: 'Lobster', sans-serif;
}

@media (max-width: 500px) {
  .demo {
    grid-template-columns: 1fr;
  }
}
</style>
