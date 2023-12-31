-- sql 문 작성 가능
-- 데이터베이스 : 데이터의 집합
-- DBMS : 데이터베이스를 운영/관리하는 프로그램 (ex. MYSQL)
-- 테이블 : 하나 이상의 열과 행으로 구성된 데이터베이스의 최소 단위
-- SQL : RDBMS에서 사용되는 언어

-- <주의>
-- SQL은 대소문자를 구별하지 않는다!
-- 단, 명령어를 쉽게 구분하기 위해 대문자로 작성
-- 단, 데이터베이스명, 테이블명 같은 경우 윈도우에서는 대소문자를 구분하지 않으나 그 외, 리눅스 환경의 경우에서는 대소문자 구분 (주의 필요)

-- DDL (Data Definition Language) : 데이터베이스, 테이블 정의 언어 

-- [DataBase 관련 명령어]
-- 1. DataBase 생성

-- [table 관련 명령어]
-- 1. 테이블 생성
-- 제약조건 ('option')
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가, 테이블에 데이터가 추가될 때마다 자동으로 숫자 증가
-- PRIMARY KEY : 기본키 설정 (중복값, NULL 불가) -> 하나의 테이블 당 하나만 설정
-- DEFAULT 기본값 : 특정 속성의 기본 갑 설정
-- UNIQUE : 중복허용 X, 단 NULL 허용 // 하나의 테이블당 여러개 가능


CREATE TABLE product (
   id int primary key not null auto_increment,
    name varchar(30) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);