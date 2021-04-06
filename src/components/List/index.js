import React, {useContext} from 'react';
import {Container} from "./styles";

import { MdAdd } from 'react-icons/md'

import Card from '../Card'
import {useDrop} from "react-dnd";
import BoardContext from "../Board/context";


export default function List({data, index:listIndex}){

    const { move } = useContext(BoardContext);

    //extra foi realizar o mover para o fim da lista caso a lista esteja  vazia
    const [,dropRef] = useDrop({
        accept: 'CARD',
        hover(item,monitor){
            console.log(item);
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const  targetIndex = data.cards.length>0?data.cards.length-1:0;

            if(targetListIndex===draggedListIndex){
                return;
            }

            move(draggedListIndex,targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    return(
        <Container done={data.done} ref={dropRef}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable &&
                    <button type="button">
                        <MdAdd size={24} color="#fff"/>
                    </button>
                }
            </header>
            <ul>
                {data.cards.map((card,index)=>
                    <Card
                        key={index}
                        index={index}
                        data={card}
                        listIndex={listIndex}
                    />
                )}
            </ul>
        </Container>
    )
}