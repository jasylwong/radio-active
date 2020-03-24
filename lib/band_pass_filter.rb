def band_pass_filter(soundwave, l_limit, u_limit)
  filtered_soundwave = []
  soundwave.each do |sound|
    if sound >= l_limit && sound <= u_limit
      filtered_soundwave.push(sound)
    elsif soundwave[0] < l_limit
      filtered_soundwave.push(l_limit)
    else
      filtered_soundwave.push(u_limit)
    end
  end
  filtered_soundwave
end