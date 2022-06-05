import { useState } from "react";
import "./form.css"

    function Form(){
        
        const [showOpt, setShowOpt] = useState(false)

        function handleSubmit(e){
            e.preventDefault()
            console.log("Teste")
        }

        function changeOpt(e){
            e.preventDefault()
            console.log()
        }

        return(
            <>
                <form>
                    <h3>Formulário</h3>
                    <h6>Vaga: <small>Desenvolvedor Front-End Júnior</small></h6>
                    <fieldset>
                        <p>
                            <legend>Seu nome<small style={{color:"red"}}>*</small></legend>
                            <input type={'text'} required placeholder="Nome completo..."/>
                        </p>
                        
                        <p>
                            <legend>Email<small style={{color:"red"}}>*</small></legend>
                            <input type={'email'} required placeholder="example@hotmail.com"/>
                        </p>

                        <p>
                            <legend>Telefone<small style={{color:"red"}}>*</small></legend>
                            <input type={'number'} required placeholder="(DDD)98765432"/>
                        </p>

                        <p>
                            <legend>Sexo<small style={{color:"red"}}>*</small></legend>
                            <select name="sexo" onChange={(e)=> setShowOpt(e.target.value)}>
                                <option value={''}>Selecione</option>
                                <option value={'homem'}>Homem</option>
                                <option value={'mulher'}>Mulher</option>
                                <option value={'outros'}>Outros</option>
                            </select>
                        </p>

                        {showOpt === 'outros' && (<p id="optSexo">
                            <legend>Qual seu sexo?<small style={{color:"red"}}>*</small></legend>
                            <input type={'text'} placeholder='Digite seu sexo' required/>
                        </p>)}

                        <p>
                            <legend>Portador de deficiência?<small style={{color:"red"}}>*</small></legend>
                            <select name="yorn" onChange={(e)=> setShowOpt(e.target.value)}>
                                <option value={''}>Selecione</option>
                                <option value={'sim'}>Sim</option>
                                <option value={'nao'}>Não</option>
                                <option value={'pref'}>Prefiro não responder</option>
                            </select>
                        </p>

                        
                            { showOpt === 'sim' && (<p id="defiTipo">
                            <legend>Qual tipo de deficiência<small style={{color:"red"}}>*</small></legend>
                            <select name="defChoose">
                                <option value={''}>Selecione</option>
                                <option value={'auditiva'}>Auditiva</option>
                                <option value={'fisica'}>Física</option>
                                <option value={'mental'}>Mental</option>
                            </select>
                        </p>)}

                        { showOpt != '' && (<p id="defiSuges">
                            <legend>Existe algo que possamos fazer para tornar a experiência da entrevista melhor?</legend>
                            <textarea placeholder="Digite o que poderiamos fazer..."></textarea>
                        </p>)}
                        
                        
                        <input type={'submit'} onClick={handleSubmit}/>
                    </fieldset>
                    
                </form>
            </>
        )
    }

export default Form;