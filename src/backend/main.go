import (
	"github.com/tentangkode/go-restapi-gin/controller/controller"
	"github.com/tentangkode/go-restapi-gin/models"

	"github.com/gin-gonic/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	models.ConnectDatabase()
	r.Use(cors.Default())

	r.GET("/api/pertanyaan", controller.Index)
	r.GET("/api/product/*pertanyaan", controller.Show)
	r.POST("/api/radio-button", controller.ShowRadioButton)

	r.Run()
}