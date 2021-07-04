## Sequelize란?

- Sequelize는 ORM(Object-Relational Mapping)
- Nodejs로 mysql postgresql(db)를 제어할수있게해줌

---

## 목차

1. 프로젝트 설정
2. dotenv 설정
3. database 생성
4. DB 접속(mySql)
5. 모델 작성
6. CRUD
7. memonet.js 적용

## .env 주의할점

- "test" 작성을 한후에 뒤에 공백이 있을경우 에러가 발생할수 있으니 주의해야함.

## CRUD Sequlize

- select, insert, update, delete

1. models.테이블명.create(데이터);
2. models.테이블명.findAll(조회조건);
3. models.테이블명.findByPk(primary key)
4. models.테이블명.findOne(조회조건)
5. models.테이블명.update(데이터, 조회조건)
6. models.테이블명.destroy(조회조건)

## 구조

- 현재 예제 프로젝트는 mvc 패턴으로 진행해봄 (model,View, Controller)
