git add .
git commit -m "deploy"

curl -u HXKbnylqa0g21yDv: "https://assertible.com/deployments" -d'{
    "service": "816c5ca6-14c3-4fd2-b69f-e687498793bd",
        "environment": "production",
	    "version": "v1",
	        "ref": "'"$(git rev-parse HEAD)"'",
		    "github": true
	    }'
