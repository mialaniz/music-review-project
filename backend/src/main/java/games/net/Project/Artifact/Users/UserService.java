package games.net.Project.Artifact.Users;

import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {
    
    public List<Users> getUsers(){
        return List.of(
            new Users(
            1L,
            "michaelalaniz76@gmail.com",
            "peaches2001$",
            "mialaniz")
        );

    }
}
