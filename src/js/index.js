import keyboardNavigation from "./keyboard-navigation.js";
import { handleRadio } from "./handle-radio.js";
import { validateForm } from "./form.js";

keyboardNavigation();
validateForm();
handleRadio();

//todo extrair lógicas repetitivas na validação
//todo Usar uma abordagem mais dinâmica para o tratamento de erros (como gerar elementos de erro em vez de depender de IDs codificados) pode melhorar a capacidade de manutenção.

//todo usar grid para eliminar alguns fieldsets no html