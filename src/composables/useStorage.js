import {ref, watch} from "vue";

export function useStorage(key, val) {
    let storeVal = localStorage.getItem(key);
    
    if(storeVal){
        let val = ref(storeVal);
    } else {
        val = ref(val);
        write();
    }


    watch(val, () => {
        write(); 
    });
    
    function write(){
        if(val.value === ''){
            localStorage.removeItem(key);
            
        }else {
            localStorage.setItem(key , val.value);
        }
    }
    
    return val;
}