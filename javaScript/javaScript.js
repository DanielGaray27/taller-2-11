class spanAyuda extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
            <style>
                span {
                       display: inline-block; 
                       background-color: #f0f8ff; 
                       box-shadow: 0 8px 8px rgba(0, 0 , 0, 0.1);
                       color: #333; 
                       border: 1px solid #007bff; 
                       border-radius: 5px;
                       padding: 8px 12px; 
                       font-size: 14px; 
                       font-family: 'Arial', sans-serif;
                       margin: 4px 0;  
                       transition: 0.3s; 
                       background-color: #e0f7fa;
                       cursor: pointer;
                }
            </style>
            <span>Ayuda</span>
        `;
        
    }

}

customElements.define("span-ayuda", spanAyuda);


class NotificacionesBoton extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const button = document.createElement('button');
        button.setAttribute('class', 'notificaciones-button');

        const icon = document.createElement('span');
        icon.textContent = '🔔';
        icon.setAttribute('class', 'icon');

        const text = document.createTextNode(' Notificaciones');

        button.appendChild(icon);
        button.appendChild(text);

        const style = document.createElement('style');
        style.textContent = `
            .notificaciones-button {
                display: flex;
                align-items: center;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px 15px;
                cursor: pointer;
                font-size: 16px;
            }
            .notificaciones-button:hover {
                background-color: #0056b3;
            }
            .icon {
                margin-right: 8px; 
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(button);
    }
}

customElements.define('notificaciones-boton', NotificacionesBoton);


class claveInput extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });


        const container = document.createElement('div');
        const input = document.createElement('input');
        const button = document.createElement('button');

      
        input.setAttribute('type', 'password');
        input.setAttribute('placeholder', 'Introduce tu clave');
        input.setAttribute('class', 'clave-input');

        button.textContent = 'Enviar';
        button.setAttribute('class', 'submit-button');

        
        button.addEventListener('click', () => {
            const clave = input.value;
            const claveEncriptada = this.encriptar(clave);
            console.log('Clave Encriptada:', claveEncriptada);
            input.value = ''; 
        });

        const style = document.createElement('style');
        style.textContent = `
            .clave-input {
                padding: 10px;
                border: 1px solid #007bff;
                border-radius: 5px;
                font-size: 16px;
                width: 100%;
                margin-bottom: 10px;
            }
            .submit-button {
                padding: 10px 15px;
                background-color: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
            }
            .submit-button:hover {
                background-color: #0056b3;
            }
        `;

        container.appendChild(input);
        container.appendChild(button);
        shadow.appendChild(style);
        shadow.appendChild(container);
    }

   
    encriptar(clave) {
        let claveEncriptada = btoa(clave); 
        return claveEncriptada;
    }
}

customElements.define('clave-input', claveInput);


class CuponDescuento extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .container {
                    display: flex;
                    flex-direction: column;
                    font-family: Arial, sans-serif;
                    width: 100%;
                    max-width: 300px;
                    margin: 10px 0;
                }

                label {
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 5px;
                    color: #333;
                }
               
                input {
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    width: 100%;
                }

                input:focus {
                    border-color: #007bff;
                    outline: none;
                    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
                }
            </style>

            <div class="container">
                <label for="cupon">Cupón de Descuento</label>
                <input type="text" id="cupon" placeholder="Ingrese su código de cupón">
            </div>
        `;
    }
}

customElements.define('cupon-descuento', CuponDescuento);