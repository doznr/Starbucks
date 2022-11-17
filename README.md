md = mark down
# Starbucks

# 개행 문자(Newline) 설정
# macOS (input)
# $ git config --global core.autocrlf input

# windows (true)
# $ git config --global core.autocrlf true

# 사용자 정보
# 커밋(버전 생성)을 위한 정보 등록
# $ git config --global user.name 'YOUR_NAME'
# $ git config --global user.email 'YOUR_EMAIL'

# 구성 확인
# Q키를 눌러서 종료!
# $ git config --global --list

# $ git init
# 현재 프로젝트에서 변경사항 추적(버전 관리)을 시작.

# $ git add .
# 모든 파일의 변경사항을 추적하도록 지정.

# $ git commit => 버전을 생성하겠다.

# $ git commit -m '프로젝트 생성'
# 메세지(-m)와 함께 버전을 생성.

# 수정된 index.html 을 깃헙에 올릴때 쓰는 터미널 코드
# git status <- 수정된게 어떤건지 확인 가능
# $ git add .
# $ git commit -m 'index.html 수정'
# $ git push origin main


#remote => 원격 
# $ git remote add origin https:#github.c....
# origin이란 별칭으로 원격 저장소를 연결.

# $ git push origin main (또는 master)
# origin이란 별칭의 원격 저장소로 버전 내역 전송.
