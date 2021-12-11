<template>
  <div>
    <div id='tab'>
      <img id="yana" alt="Logo Yana" src="../assets/yana.png"/>
    </div>
    <TabMenu :model="items" />
    <router-view />
  </div>
</template>


<script>
export default {
    data() {
		return {
			items: [
                {label: 'Chat', icon: 'pi pi-fw pi-comments'},
                {label: 'Rutina', icon: 'pi pi-fw pi-heart'},
                {label: 'Baúl', icon: 'pi pi-fw pi-briefcase'},
                {label: 'Settings', icon: 'pi pi-fw pi-cog'}
            ]
		}
	},
  
}
</script>

<style scoped>
#tab{
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  height:55px;
  background: #C74850;
}
#yana{
  width: 60px;
  height: 52px;
  margin-left: 20px;
  margin-top:2px;

}
</style>