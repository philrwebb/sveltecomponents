<script>
    // export let bgcolor = 'lightgrey';
    export let imgurl = './images/user-1.jpg';
</script>

<style>
.avatar {
	justify-content: center;
  justify-self: center;

}

.avatar img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
}
</style>

<svelte:options tag="s-avatar" />
<div class="avatar" >
  <img src="{imgurl}" alt='PW'/>
</div>
