import Button from 'components/Button'
import Header from 'components/Header'
import Item from 'components/Item'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './Categoria.module.scss'

export default function Categoria() {
  const navigate = useNavigate()
  const { nomeCategoria } = useParams()
  const { categoria, itens } = useSelector((state) => {
    const regexp = new RegExp(state.busca, 'i')
    return {
      categoria: state.categorias.find(
        ((categoria) => categoria.id === nomeCategoria) || {}
      ),
      itens: state.itens.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp)
      ),
    }
  })

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      >
        <Button onClick={() => navigate(`/anuncie/${nomeCategoria}`)}>
          Quero anunciar
        </Button>
      </Header>
      <div className={styles.itens}>
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}
