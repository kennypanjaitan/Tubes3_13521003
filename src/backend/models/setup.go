import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"time"
)

var DB *gorm.DB

type qna struct {
	Id          int64  `gorm:"primaryKey" json:"id"`
	Question 	string `gorm:"type:varchar(500)" json:"question"`
	Answer   	string `gorm:"type:varchar(500)" json:"answer"`
}

type history struct {
	SessionId   int64  `gorm:"primaryKey" json:"id"`
	Question 	string `gorm:"type:varchar(500)" json:"question"`
	Answer   	string `gorm:"type:varchar(500)" json:"answer"`
	date		time.Time
}

func ConnectDatabase() {
	database, err := gorm.Open(mysql.Open("root:@tcp(localhost:3306)/go_restapi_gin"))
	if err != nil {
		panic(err)
	}

	database.AutoMigrate(&Product{})

	DB = database
}