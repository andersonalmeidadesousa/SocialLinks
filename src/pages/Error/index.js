import './erro.css'

import { Link } from 'react-router-dom'
import { Logo} from '../../components/Logo'

export default function Error(){
    return(
       <div className='error'>
        <Logo/>
         <h1>Página não Encontrada!</h1>
         <p>Está Página que Está Procurando não existe.</p>

         <Link className='link' to="/">
         Voltar para Home
         </Link>
            
         
       </div>
   
    )
   
   }