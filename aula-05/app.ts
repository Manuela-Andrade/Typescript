
   
    import { Ibm } from "./ibm";
    import { LapTop } from "./laptop";
    import { LeNovo } from "./lenovo";
    
    let computador: LapTop;
    let outro: LapTop;

    computador = new LapTop(14);
    outro=new LapTop(21);
    computador.ligarMonitor();
    console.log(`o tamanho da tela é de ${computador.tela} polegadas`);
    console.log(`o tamanho da tela é de ${outro.tela} polegadas`);

    
    let lenovo: LeNovo;

    lenovo = new LeNovo();
    
    lenovo.ligarMonitor();
    lenovo.aumentarBrilho(4);

    
    

    let ibm: Ibm;
    ibm: Ibm;

    ibm = new Ibm(12);

    ibm.memoriaDeVideo = 512;

    ibm.ligarMonitor();

    console.log(`Meu laptop tem ${ibm.memoriaDeVideo} de memoria de video`);






