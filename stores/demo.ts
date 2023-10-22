import { defineStore } from 'pinia'

export const useMyDemoStore = defineStore('demo', ()=>{
  const demoName = ref<string | undefined>('Helo');

  const setDemoName = (data?: string) => (demoName.value = data);

  const changeDemoName = async(name: string)=>{
    setDemoName(name);
  };

  return { demoName, changeDemoName, setDemoName };
})
