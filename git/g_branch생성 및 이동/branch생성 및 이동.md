## ⚙ Git Branch 생성 및 이동

    ** 실습 상황 **

    1. 홈 디렉터리에 'menual' 이름의 새 디렉터리 생성 후 해당 디렉터리로 이동
    2. 생성한 디렉터리를 저장소로 만들고 확인하기
    3. work.txt 파일 생성 후 'content 1' 내용 입력하고 저장하기
    4. wort.txt 파일을 스테이지에 올린 후 커밋하기. 
       커밋 메시지는 'work 1'
    5. work.txt 파일에 'content 2' 내용 추가 후 커밋하기 ('work 2')
    6. work.txt 파일에 'content 3' 내용 추가 후 커밋하기 ('work 3')

    7. paging, category 브랜치 생성
    8. 최신 커밋이 work 3인 상태에서 work.txt 안 'main content 4' 내용 추가 후 'main work 4' 커밋 메시지로 커밋하기
    ==> git log로 확인해보면, main 브랜치 = "main work 4" / 
        이외 브랜치 = "work 3" 커밋 상태
        = 새로 생성한 커밋한 현재 브랜치 (main)에만 적용되고 나머지 브랜치엔 적용 X

    9. 'search'브랜치로 이동 (git switch search)
    10. git log로 확인하면 'work 3'까지 나오는 것으로 확인됨
        cat work.txt로 내용 확인 시 main content 4는 없고, content 3까지만 나옴
        = 'main content 4'는 search 브랜치를 분기한 후 main브랜치에 추가된 커밋이기 때문에, 나머지 브랜치에 영향 끼치지 않았음



### ** 브랜치 생성 및 이동
+ `git branch` : 현재 브랜치 확인 

+ `git branch [브랜치명]` : 새 브랜치 생성

  + `git branch`는 현재 브랜치 확인할 때와 새 브랜치 생성할 때 다 사용함
  + 브랜치명 뒤에 `*`가 붙은 것은 현재 작업하는 브랜치를 뜻함

+ `git log --oneline` : 한 줄에 한 커밋씩 보여줌. 여러 커밋 확인할 때 유용.

<br>

### ** `git switch` : 브랜치 전환하기
+ 여러 개의 브랜치가 있을 때, 서로 다른 커밋을 할 수 있음

+ 각각의 브랜치를 오가면서 작업

+ `git switch [브랜치명]` : 해당 브랜치명으로 브랜치 변경됨
  + 브랜치가 변경되면 경로 끝에 변경한 브랜치명으로 뜸

<br><hr><br>

### ** 다시 `checkout`, `restore`, `switch` 정리
#### `checkout`
+ 작업 트리에서 수정 내용을 취소할 때
+ 스테이지에 올린 것을 취소할 때
+ 브랜치를 전환할 때 등 여러 기능을 수행

  => *<u>기존에 checkout 명령에서 하던 기능을 restore와 switch로 나눔</u>*