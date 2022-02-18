import { useCallback, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todosState } from '../contexts/TodosAtom'
import { pageState } from '../contexts/TodosPageAtom'

function usePageNation(news: string | any[]) {
  const todos = useRecoilValue(todosState)
  const [pageIdx, setPageIdx] = useRecoilState(pageState)

  const showNum = 5
  const [sliceIdx, setSliceIdx] = useState(0)

  const pageShowNum = 5
  const [pageSliceIdx, setPageSliceIdx] = useState(0)

  const pageShowMaxNum = Math.ceil(news.length / pageShowNum)
  const pageShowArray = [...Array(pageShowMaxNum)].map((_, idx) => idx + 1)

  const prevPage = useCallback(
    (pageNum: number) => {
      setPageIdx(pageNum - 1)
      setSliceIdx(sliceIdx - 1)

      if (pageNum === 1) {
        setPageIdx(1)
        setSliceIdx(0)
        setPageSliceIdx(0)
      }
      if (Math.floor(pageNum % pageShowNum) === 0) {
        if (pageNum < pageShowNum) {
          return
        } else {
          setPageSliceIdx(pageSliceIdx - pageShowNum)
        }
      }
    },
    [pageIdx, todos],
  )

  const nextPage = useCallback(
    (pageNum: number) => {
      if (pageNum >= pageShowMaxNum) {
        return
      } else {
        setPageIdx(pageNum + 1)
        setSliceIdx(sliceIdx + 1)
        if (Math.floor(pageNum % pageShowNum) === 0) {
          if (pageNum < pageShowNum) {
            return
          } else {
            setPageSliceIdx(pageSliceIdx + pageShowNum)
          }
        }
      }
    },
    [pageIdx, todos],
  )

  const choicePage = useCallback(
    (pageNum: number) => {
      setPageIdx(pageNum)
      setSliceIdx(pageNum - 1)
      const pageNationNum = Math.floor(pageNum % pageShowNum)
      if (pageNationNum === 0) {
        return
      } else {
        setPageSliceIdx(pageNum - pageNationNum)
      }
    },
    [pageIdx, todos],
  )
  return {
    pageShowNum,
    pageSliceIdx,
    sliceIdx,
    showNum,
    pageShowArray,
    prevPage,
    nextPage,
    choicePage,
  }
}

export default usePageNation
