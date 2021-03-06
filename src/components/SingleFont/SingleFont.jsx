import WebFontConfig from 'webfontloader'
import React, { useContext, useEffect, useState } from 'react'
import { CustomTextContext } from '../SearchEngine/SearchEngine'
import * as S from './SingleFont.Styled'
import Slider from '../Slider/Slider'

const SingleFont = ({ font, handleAddToCart }) => {
  const customText = useContext(CustomTextContext)
  const { family, category } = font
  const [fontWeight, setFontWeight] = useState(400)
  const [isCopied, setIsCopied] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [fontSize, setFontSize] = useState(32)

  useEffect(() => {
    WebFontConfig.load({
      google: {
        families: [`${family}:300,400,500,600`],
      },
    })
  }, [family])

  const handleCopyFont = () => {
    let url = `@import url('https://fonts.googleapis.com/css2?family=`
    const fontArr = family.split(' ')
    const res = fontArr.join('+')

    url += `${res}:wght@300;400;500;600;700;800&display=swap');`
    navigator.clipboard.writeText(url)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  const handleFontSize = (size) => {
    setFontSize(size)
  }
  // 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

  return (
    <S.Card>
      <S.CardBody>
        <S.TopPart>
          <S.FamilyTitle>{family}</S.FamilyTitle>
          <S.CategoryTitle>{category}</S.CategoryTitle>
        </S.TopPart>

        <S.MiddleGroup>
          <S.DemoTitle
            style={{
              fontFamily: `${family}`,
              fontSize: `${fontSize}px`,
              fontWeight: `${fontWeight}`,
            }}
          >
            {customText}
          </S.DemoTitle>
        </S.MiddleGroup>

        {/* prettier-ignore */}
        <S.BottomGroup>
          <S.FontWeightButton onClick={()=>setFontWeight(600)} fw='600'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton onClick={()=>setFontWeight(500)} fw='500'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton onClick={()=>setFontWeight(400)} fw='400'><p>Aa</p></S.FontWeightButton>
          <S.FontWeightButton onClick={()=>setFontWeight(300)} fw='300'><p>Aa</p></S.FontWeightButton>
        </S.BottomGroup>
      </S.CardBody>
      <Slider handleFontSize={handleFontSize} fontSize={fontSize}></Slider>
      <S.ButtonGroup>
        <button onClick={handleCopyFont}>{isCopied ? 'copied' : 'copy'}</button>
        <button
          onClick={() => {
            setIsAdded(true)
            handleAddToCart(font)
          }}
        >
          {isAdded ? 'added' : 'add'}
        </button>
      </S.ButtonGroup>
    </S.Card>
  )
}

export default SingleFont
