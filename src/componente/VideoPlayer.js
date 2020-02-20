import React from 'react'
import { connect } from 'react-redux'
import { Advertisement, Embed } from 'semantic-ui-react'

const VideoPlayer = props => {
    return (
        <div className="video-player">
            {
                !props.video.id && (
                    <Advertisement style={{ 'height': '433px' }}
                        unit='top banner'
                        test='Escolha um video para reproduzir' />
                )
            }
            {
                props.video.id && (
                    <div>
                        <Embed id={props.video.id.videoId} source='youtube'
                         placeholder='https://i.pinimg.com/originals/a2/81/38/a28138c18f0e24e9bab084aaa97770be.jpg' />
                        <p className='video-titulo'>{props.video.snippet.title}</p>
                        <p className='video-descricao'>{props.video.snippet.description}</p>
                        <p>Projeto feito com React-redux, redux-logger e Redux-thunk 20/02/2020</p>
                        <p>João Paulo Lacerda desenvolvedor Front End</p>
                    </div>
                )
            }

        </div>
    )
}

const mapStateToprops = (state) => {
    return {
        video: state.reproduzVideo.video
    }
}
export default connect(mapStateToprops, null)(VideoPlayer)