import { useState } from 'react'

function usePageNation(news: string | any[]) {
  const [pageIdx, setPageIdx] = useState(1)

  const newsShowNum = 5
  const [newsSliceIdx, setNewsSliceIdx] = useState(0)

  const pageShowNum = 5
  const [pageSliceIdx, setPageSliceIdx] = useState(0)

  const pageShowMaxNum = Math.ceil(news.length / pageShowNum)
  const pageShowArray = [...Array(pageShowMaxNum)].map((_, idx) => idx + 1)

  const prevPage = (pageNum: number) => {
    setPageIdx(pageNum - 1)
    setNewsSliceIdx(newsSliceIdx - 1)

    if (pageNum === 1) {
      setPageIdx(1)
      setNewsSliceIdx(0)
      setPageSliceIdx(0)
    }
    if (Math.floor(pageNum % pageShowNum) === 0) {
      if (pageNum < pageShowNum) {
        return
      } else {
        setPageSliceIdx(pageSliceIdx - pageShowNum)
      }
    }
  }

  const nextPage = (pageNum: number) => {
    if (pageNum >= pageShowMaxNum) {
      return
    } else {
      setPageIdx(pageNum + 1)
      setNewsSliceIdx(newsSliceIdx + 1)
      if (Math.floor(pageNum % pageShowNum) === 0) {
        if (pageNum < pageShowNum) {
          return
        } else {
          setPageSliceIdx(pageSliceIdx + pageShowNum)
        }
      }
    }
  }

  const choicePage = (pageNum: number) => {
    setPageIdx(pageNum)
    setNewsSliceIdx(pageNum - 1)
    const pageNationNum = Math.floor(pageNum % pageShowNum)
    if (pageNationNum === 0) {
      return
    } else {
      setPageSliceIdx(pageNum - pageNationNum)
    }
  }
  return {
    pageIdx,
    pageShowNum,
    pageSliceIdx,
    newsSliceIdx,
    newsShowNum,
    pageShowArray,
    prevPage,
    nextPage,
    choicePage,
  }
}

export default usePageNation
