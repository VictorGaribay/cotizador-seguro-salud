import React from 'react'
interface ContainerContentProps {
  titleContent: { title: string; label: string }
  listItem: { url: string; text: string }[]
}

const ContainerContent: React.FC<ContainerContentProps> = ({ listItem, titleContent }) => {
  return (
    <div className="container__content">
      <div className="container__content--text">
        <div className="container__title">
          <div>{titleContent.title} </div>
          <label>{titleContent.label}</label>
        </div>
        <div className="container__list">
          {listItem.map((list, index) => (
            <div key={index}>
              <img src={list.url} alt="lista" />
              {list.text}
            </div>
          ))}
        </div>
        <div className="container__footer">&copy; {new Date().getFullYear()};y Company</div>
      </div>
    </div>
  )
}

export default ContainerContent
