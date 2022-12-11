package licsky.server;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
@RequestMapping("/hello")
@EnableWebSecurity
@Slf4j
public class test implements WebMvcConfigurer {

  @Override
  public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**").allowedMethods("*");
  }

  @GetMapping
  public String get() {
    return "hello";
  }


  @Bean
  public DefaultSecurityFilterChain securityWebFilterChain(HttpSecurity http) throws Exception {
    http
        .authorizeRequests().anyRequest().permitAll().and()
        .cors().disable()
        .csrf().disable();
    return http.build();
  }

}
