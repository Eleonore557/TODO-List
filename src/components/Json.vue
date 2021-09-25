<template>
  <div class="hello">

    <div align="center">
      <table class="table">
        <thead>
          <tr>
            <th>First Name______</th>
            <th>Last Name______</th>
            <th>Age______</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {{ User.firstName }}</td>
            <td>{{ User.lastName }}</td>
            <td>{{ User.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Json',
  data() {
    return {
      User: {},
    }
  },
  mounted() {
    axios.get('http://localhost:3000/')

      .then((response) =>{
      console.log(response.data);
      this.User = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
