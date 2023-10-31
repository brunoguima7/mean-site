import "../styles/global.css"
import "../styles/form.css"
import "../styles/button.css"
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function Form() {

    const [name, setName] = useState()

    const [email, setEmail] = useState()

    const [phone, setPhone] = useState()

    const [cpf, setCPF] = useState()

    const [payer, setPayer] = useState()

    const [error, setError] = useState()

    const [qrImage, setQrImage] = useState()

    const [qrText, setQrText] = useState("")

    const [showForm, setShowForm] = useState(true)

    const [showPix, setShowPix] = useState(false)

    const templateParams = {
        name: name,
        email: email,
        cpf: cpf,
        phone: phone,
        payer: payer,
    }

    function loteSetter() {

        const date = new Date()

        const today = date.getDate()

        console.log(today)

        if (today == 31 | today <= 5) {
            setQrImage("qrcode35.jpeg")
            setQrText("00020126330014BR.GOV.BCB.PIX011151363191861520400005303986540535.005802BR5925ISABELLE DE CAMARGO GUIMA6009SAO PAULO62070503***6304537C")
        } else if (today >= 6 && today <= 10) {
            setQrImage("qrcode45.jpeg")
            setQrText("00020126330014BR.GOV.BCB.PIX011151363191861520400005303986540545.005802BR5925ISABELLE DE CAMARGO GUIMA6009SAO PAULO62070503***6304F7B9")
        } else if (today == 11 ) {
            setQrImage("qrcode50.jpeg")
            setQrText("00020126330014BR.GOV.BCB.PIX011151363191861520400005303986540550.005802BR5925ISABELLE DE CAMARGO GUIMA6009SAO PAULO62070503***63048226")
        }
    }

    function validateEmail(value) {
        if (!value.match(/\w{2,}@[A-Za-z]{2,}\.[A-Za-z]{2,}/)) {
            const err = new Error("E-mail inválido. Favor digitar no formato: nome@email.com")
            err.input = "email"
            throw err
        }
    }

    function validatePhone(value) {
        if (!value.match(/\d{11}/)) {
            const err = new Error("Número de telefone inválido. Favor digitar no formato: 11991234567")
            err.input = "phone"
            throw err
        }
    }

    function validateCPF(value) {
        if (!value.match(/\d{11}/)) {
            const err = new Error("CPF inválido. Favor digitar no formato: 11122233300")
            err.input = "cpf"
            throw err
        }
    }

    function copy(ev) {
        ev.preventDefault()

        navigator.clipboard.writeText(qrText)
        alert("Código copiado para a área de transferência.")
    }

    function sendEmail(ev) {

        ev.preventDefault()

        try {
            setError("")
            setQrImage("")
            setQrText("")
            validateEmail(email)
            validatePhone(phone)
            validateCPF(cpf)
            emailjs.send("service_8kaa8sc", "template_eu38aid", templateParams, "Amw5MTKKeR5FELNMZ")
            .then((response) => {
                loteSetter()
                console.log(response.status)
                setShowForm(false)
                setShowPix(true)
            })
        }
        catch (err) {
            setError(err.message)
        }
    }

    return (
        <div>
            <h1 className="title" id="first-title">COMPRA DE INGRESSOS</h1>
            <p id="description" className="text">
                A compra de ingressos pelo site funcionará de forma semelhante a compra via whatsapp, porém de forma automática. Você informará
                seus dados e efetuará o pagamento (Apenas via pix). Assim que o pagamento for confirmado será enviado um e-mail à você
                contendo seu ingresso. Em caso de qualquer dúvida, seja ao pagamento ou a qualquer outro assunto referente ao ingresso, você
                pode entrar em contato conosco via whatsapp, no grupo ou diretamente para alguma das nossas administradoras.
            </p>

            <div id="div-container">
                <form onSubmit={sendEmail}>
                    <div id="form-container">
        
                        {showForm == true && (
                            <div id="form-div">
                                <div className="space">
                                    <p className="pay-text">
                                        Após seus dados serem salvos, será gerado o QR code para efetuar o pagamento. O ingresso não
                                        será enviado caso seu nome não esteja constando na transferência. Se o pix for feito utilizando conta
                                        de terceiros, você deve digitar no campo indicado. Lembrando que em qualquer caso a equipe Mean
                                        estará a disposição para o atendimento.
                                    </p>
                                </div>
                                
                                <div id="inputs-div">
                                    <div id="column1">
                                        <label htmlFor="name">Nome Completo</label> <br/>
                                        <input
                                            type="text" id="name" className="space" value={name}
                                            onChange={(ev) => setName(ev.target.value)}
                                            required
                                        />
                                        <span className="obs">(Como no RG)</span> <br/>

                                        <label htmlFor="email">E-Mail</label> <br/>
                                        <input
                                            type="text" id="email" className="space" value={email}
                                            onChange={(ev) => setEmail(ev.target.value)}
                                            required
                                        />
                                        <br/>

                                        <label htmlFor="pix">Proprietário do pix</label> <br/>
                                        <input
                                            type="text" id="pix" className="space" value={payer}
                                            onChange={(ev) => setPayer(ev.target.value)}
                                        /><span className="obs">(Não obrigatório)</span>
                                        <br />
                                    </div>

                                    <div id="column2">
                                        <label htmlFor="phone">Número de Celular</label> <br/>
                                        <input
                                            type="number" id="phone" className="space" value={phone}
                                            onChange={(ev) => setPhone(ev.target.value)}
                                            required
                                        />
                                        <span className="obs">(Apenas números)</span> <br/>

                                        <label htmlFor="cpf">CPF</label> <br/>
                                        <input
                                            type="number" id="cpf" className="space" value={cpf}
                                            onChange={(ev) => setCPF(ev.target.value)}
                                            required
                                        />
                                        <span className="obs">(Apenas números)</span>
                                    </div>
                                </div>

                                {error != null &&(
                                    <div id="span-div">
                                        <span id="error-message">{error}</span>
                                    </div>
                                )}
                                
                                <div id="submit-button" className="center-div">
                                    <button type="submit" className="qr-buttons">Gerar QrCode</button>
                                </div>
                            </div>
                        )}

                        {showPix == true && (
                            <div>
                                <div className="qr-elements">
                                    <img src={qrImage} alt="" />
                                </div>

                                <div className="qr-elements">
                                    {qrText != "" && (
                                        <div>
                                            <button className="qr-buttons" onClick={copy}>Copiar QR</button>
                                        </div>
                                    )}
                                </div>

                                {qrText != "" && (
                                    <div className="center-div">
                                        <p className="pay-text">
                                            Após realizar o pagamento, fique tranquilo pois o ingresso irá direto para seu e-mail com todas
                                            informações (não será gerada nenhuma notificação aqui pelo site).
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </form>
            </div>
            
            <h1 className="title">IMPORTANTE</h1>
            <p className="sub">O prazo para recebimento do ingresso é de 1 hora.</p>
            <p className="sub">Ingressos adquiridos entre 00:00 e 07:00 serão enviados a partir das 07:00.</p>
            <p className="sub">Caso não receba o ingresso dentro do prazo, entre em contato conosco.</p>

        </div>
    )
}







