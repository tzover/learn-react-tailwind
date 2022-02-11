import { useRouter } from 'next/router'
import React from 'react'
import usePageNation from './usePageNation'
import { PostIF } from '../../models/news'

interface Props {
  news: PostIF[]
}

const News: React.FC<Props> = (props) => {
  const { news } = props
  const router = useRouter()

  const {
    pageIdx,
    pageShowNum,
    pageSliceIdx,
    newsSliceIdx,
    newsShowNum,
    pageShowArray,
    prevPage,
    nextPage,
    choicePage,
  } = usePageNation(news)

  return (
    <div className='flex flex-col'>
      <div className='py-5'>
        {news
          .slice(
            newsSliceIdx === 0 ? 0 : newsSliceIdx * newsShowNum,
            newsSliceIdx * newsShowNum + newsShowNum,
          )
          .map((item) => (
            <div
              key={item.id}
              onClick={() => router.push(`news/${item.id}`)}
              className='flex text-xl py-3 hover:bg-pink-200 md:text-2xl'
            >
              <div className='pl-3'>
                <p>{item.id}</p>
              </div>
              <div className='pl-10 w-3/4'>
                <p className='truncate'>{item.title}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Pagenation */}
      <nav aria-label='Page navigation' className='mt-5 mb-16'>
        <ul className='flex justify-between'>
          <li>
            <button
              className='h-10 px-5 transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-pink-200'
              onClick={() => prevPage(pageIdx)}
            >
              <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                <path
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                  fillRule='evenodd'
                ></path>
              </svg>
            </button>
          </li>
          {pageShowArray
            .slice(
              pageSliceIdx === 0 ? 0 : pageSliceIdx,
              pageSliceIdx + pageShowNum,
            )
            .map((item) => (
              <li key={item}>
                <button
                  className='h-10 px-3 transition-colors duration-150 focus:shadow-outline hover:bg-pink-200 md:px-5'
                  onClick={() => choicePage(item)}
                >
                  {item}
                </button>
              </li>
            ))}

          <li>
            <button
              className='h-10 px-5 transition-colors duration-150 rounded-r-lg focus:shadow-outline hover:bg-pink-200'
              onClick={() => nextPage(pageIdx)}
            >
              <svg className='w-4 h-4 fill-current' viewBox='0 0 20 20'>
                <path
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                  fillRule='evenodd'
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default News
