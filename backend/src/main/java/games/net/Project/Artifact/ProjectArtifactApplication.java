package games.net.Project.Artifact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ProjectArtifactApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectArtifactApplication.class, args);
	}


	@GetMapping("/hello")
	public String hello() {
		return "hello";

	}

}
