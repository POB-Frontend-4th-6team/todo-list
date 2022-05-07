import { useState, useRef, useEffect } from 'react'
import styles from './TodoCategory.module.scss'
import cx from 'classnames'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const CATE_LIST = [
  {
    id: 1,
    category: 'all',
    text: '전체보기',
  },
  {
    id: 2,
    category: 'business',
    text: '일',
  },
  {
    id: 3,
    category: 'health',
    text: '운동',
  },
  {
    id: 4,
    category: 'personal',
    text: '개인',
  },
  {
    id: 5,
    category: 'hobby',
    text: '취미',
  },
]

const TOTAL_SLIDES = 3

function TodoCategory() {
  const [currentCate, setCate] = useState('all')
  const [currentIndex, setIndex] = useState(0)
  const catesRef = useRef()

  const handleClickCate = (e) => {
    const { dataset } = e.currentTarget
    const { category } = dataset

    setCate(() => {
      const newCate = category
      return newCate
    })
  }

  const handlePrev = () => {
    if (currentIndex) {
      setIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < TOTAL_SLIDES) {
      setIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    catesRef.current.style.transform = `translateX(-${currentIndex * 13}0px)`
  }, [currentIndex])

  return (
    <section className={styles.todoCategory}>
      <h3>Categories</h3>
      <div className={styles.cateWrap}>
        <button type='button' className={styles.arrowBtn} onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button type='button' className={styles.arrowBtn} onClick={handleNext}>
          <FaArrowRight />
        </button>
        <ul className={styles.categoryList} ref={catesRef}>
          {CATE_LIST.map((cate) => (
            <li
              key={`category-${cate.id}`}
              className={cx(styles.category, { [styles.isActive]: cate.category === currentCate })}
            >
              <button className={styles.cateBtn} type='button' data-category={cate.category} onClick={handleClickCate}>
                <span className={styles.cateTasks}>
                  {/* 수정 필요 */}
                  12 tasks
                </span>
                <span className={styles.cateTitle}>{cate.text}</span>
                <div className={cx(styles.taskProgress, styles[cate.category])}>{/* 수정 필요 */}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p>
        {/* category 값 */}
        {currentCate}
      </p>
    </section>
  )
}
export default TodoCategory
