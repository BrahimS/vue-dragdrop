<template>
<div>
   <h1>Questions page</h1>
   <draggable 
    v-model="clientsQuestions" 
    group="people" 
    
    @end="onEnd" 
    ghost-class="ghost"
   >
   <transition-group type="transition" name="flip-list">
       <div class="sortable" v-for="element in $store.state.clientsQuestions" :key="element.id"  :id="element.id">
           <strong>{{ element.name}}</strong>
           <span>{{ element.id}}</span>
       </div>
   </transition-group>
</draggable>  
<p>
    <strong>Previous Index: </strong>
    {{ oldIndex }}
</p>
<p>
    <strong>New Index: </strong>
    {{ newIndex }}
</p>
</div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name: 'Questions',
    components: {
        draggable
    },
    

    
}
</script>
<style lang="sass">
strong 
  display: inline-block

.sortable 
  width: 100%
  padding: 2em
  cursor: move
  margin-bottom: 2px
  background: beige
  box-sizing: border-box
  span
    float: right
    color: black

.sortable-drag 
  opacity: .5
  
.sortable-chosen 
  background: #eee
  transition: .3s ease-in-out

.flip-list-move
  transition: .3s ease-in-out

.ghost 
  transition: .1s ease-in-out
  border: 4px dotted grey
    
</style>