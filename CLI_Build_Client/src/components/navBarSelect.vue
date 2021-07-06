<template>
    <div class="container-fluid" >
        <div class="row">
            <div class="mb-3">
                <label for="name" class="form-label">Name : </label>
                <input type="email" class="form-control" id="name" placeholder="Name" :value="name" @input="name=$event.target.value">
            </div>
        </div>
        <div class="row">
            <label  class="form-label" >Born : </label>
            <input data-role="doubleslider"
                class="ultra-thin cycle-marker"
                data-show-min-max="true"
                data-hint-mask-min="Min: $1"
                data-hint-mask-max="Max: $1"
                data-max="2002"
                data-min="1980"
                data-hint-always="true"
                data-value-min="1980"
                @change="born.max=$event.target.value.split(',')[1],born.min=$event.target.value.split(',')[0]"
                data-value-max="2002"
                 data-cls-hint="bg-cyan fg-white">
        </div>
        <div class="row">
            <label  class="form-label" >Breast : </label>
            <input data-role="doubleslider"
                class="ultra-thin cycle-marker"
                data-show-min-max="true"
                data-hint-mask-min="Min: $1"
                data-hint-mask-max="Max: $1"
                data-max="100"
                data-min="60"
                data-hint-always="true"
                data-value-min="60"
                data-value-max="100"
                @change="breast.max=$event.target.value.split(',')[1],breast.min=$event.target.value.split(',')[0]"
                 data-cls-hint="bg-cyan fg-white">
        </div>
        <div class="row">
            <label  class="form-label" >Waist : </label>
            <input data-role="doubleslider"
                class="ultra-thin cycle-marker"
                data-show-min-max="true"
                data-hint-mask-min="Min: $1"
                data-hint-mask-max="Max: $1"
                data-max="70"
                data-min="30"
                data-hint-always="true"
                data-value-min="30"
                data-value-max="70"
                @change="waist.max=$event.target.value.split(',')[1],waist.min=$event.target.value.split(',')[0]"
                 data-cls-hint="bg-cyan fg-white">
        </div>
        <div class="row">
            <label  class="form-label" >Hips : </label>
            <input data-role="doubleslider"
                class="ultra-thin cycle-marker"
                data-show-min-max="true"
                data-hint-mask-min="Min: $1"
                data-hint-mask-max="Max: $1"
                data-max="100"
                data-min="60"
                data-hint-always="true"
                data-value-min="60"
                data-value-max="100"
                @change="hips.max=$event.target.value.split(',')[1],hips.min=$event.target.value.split(',')[0]"
                 data-cls-hint="bg-cyan fg-white">
        </div>
        <div class="row">
            <label  class="form-label" >Height : </label>
            <input data-role="doubleslider"
                class="ultra-thin cycle-marker"
                data-show-min-max="true"
                data-hint-mask-min="Min: $1"
                data-hint-mask-max="Max: $1"
                data-max="180"
                data-min="140"
                data-hint-always="true"
                data-value-min="140"
                data-value-max="180"
                @change="height.max=$event.target.value.split(',')[1],height.min=$event.target.value.split(',')[0]"
                 data-cls-hint="bg-cyan fg-white">
        </div>
        <div class="row" style="margin-bottom: 6.6rem">
            <button class="btn btn-success" @click="$emit('input',{name,born,breast,waist,hips,height})">Search</button>
        </div>
    </div>
   
</template>

<script>
export default {
    emits: ['input'],
    data(){
        return {
            name:'',
            born:{min:'',max:''},
            breast:{min:'',max:''},
            waist:{min:'',max:''},
            hips:{min:'',max:''},
            height:{min:'',max:''},
        }
    }
}
</script>

<style scoped>
    .row{
        margin-bottom: 2rem;
    }
    .form-label{
        color: #ffffff;
    }

</style>