<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.border-title {
  font-size: 18px;
  font-weight: bold;
  padding-left: 12px;
  border-left: 4px solid orange;
  margin-bottom: 15px;
}
.flex {
  display: flex;
}
.flex-sub {
  flex: 1;
}
.flex-align-center {
  display: flex;
  align-items: center;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #ccc;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background: rgba(255, 255, 255, 1);
}
</style>
