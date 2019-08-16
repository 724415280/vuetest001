<template>
  <div id="app">
    <div class="container">
			<nav class="navbar navbar-default " role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand active" href="#">首页</a>
					</div>
					<div>
						<ul class="nav navbar-nav">
							<li>
								
								<router-link to="/EmpAdd">雇员新增</router-link>
							</li>
							<li>
								
								<router-link to="/emplist">雇员列表</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
     <router-view/>
		</div>
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
